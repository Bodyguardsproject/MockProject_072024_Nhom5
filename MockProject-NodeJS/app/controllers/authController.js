const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const sendEmail = require('../services/mailService');
const nodemailer = require('nodemailer');

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
        // Create JWT Token
        const token = jwt.sign(
            { id_user: user.id_user },
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
