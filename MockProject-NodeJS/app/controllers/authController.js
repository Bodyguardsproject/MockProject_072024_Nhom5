const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const sendEmail = require('../services/mailService');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Compare password
        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Check the user's status
        if (user.status !== 'Active') {
            return res.status(403).json({ error: 'Your account has been either deactivated or not yet verified. Please check your email for verification instructions or contact support for assistance' });
        }
        // Create JWT Token
        const token = jwt.sign(
            { id_user: user.id_user, role_id: user.role_id},
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: `Error logging in: ${err.message}` });
    }
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


exports.signup = async (req, res) => {
    const { first_name, last_name, phoneNumber, email, address, password } = req.body;

    try {
        // Check if email exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Create new user with status 'inactive'
        const newUser = await User.create({
            first_name,
            last_name,
            phoneNumber,
            email,
            address,
            password,
            status: 'Inactive' // Set default status as 'inactive'
        });

        // Send verification email
        const confirmationLink = `http://localhost:3000/api/auth/confirm/${newUser.id}`;
        const emailContent = `
            Hi ${first_name} ${last_name},
            
            Thank you for registering. Please confirm your email by clicking the link below:
            ${confirmationLink}
            
            If you didn't register, please ignore this email.
        `;
        await sendEmail(email, 'Confirm your registration', emailContent);

        res.status(201).json({ message: 'Please check your email to confirm your registration.' });
    } catch (err) {
        res.status(500).json({ error: `Error registering user: ${err.message}` });
    }
};

exports.confirmEmail = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.status === 'Active') {
            return res.status(400).json({ message: 'User already activated' });
        }

        // Update status to 'active'
        await User.updateStatus(userId, 'Active');

        res.status(200).json({ message: 'Your email has been confirmed. You can now log in.' });
    } catch (err) {
        res.status(500).json({ error: `Error confirming email: ${err.message}` });
    }
};

// Request password reset
exports.requestPasswordReset = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the email exists
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(404).json({ error: 'Email not found' });
        }
        // Generate OTP
        const otp = crypto.randomInt(100000, 999999); // 6-digit OTP

        // Save OTP to cache or a temporary storage
        if (!req.app.locals.otpCache) {
            req.app.locals.otpCache = {};
        }
        req.app.locals.otpCache[email] = otp;

        // Send email with OTP
        const emailContent = `
            Hi,

            Use the following OTP to reset your password: ${otp}
            
            If you didn't request this, please ignore this email.
        `;
        await sendEmail(email, 'Password Reset OTP', emailContent);

        res.status(200).json({ message: 'OTP sent to email' });
    } catch (err) {
        res.status(500).json({ error: `Error sending OTP: ${err.message}` });
    }
};

// Reset password
exports.resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    try {
        // Validate OTP
        const storedOtp = req.app.locals.otpCache[email];
        if (otp !== storedOtp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        // Find user and update password
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await User.updatePassword(email, newPassword);

        // Remove OTP after successful reset
        delete req.app.locals.otpCache[email];

        res.status(200).json({ message: 'Password reset successful' });
    } catch (err) {
        res.status(500).json({ error: `Error resetting password: ${err.message}` });
    }
};