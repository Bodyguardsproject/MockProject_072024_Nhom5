const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/signup', authController.signup);
// Route verify email
router.get('/confirm/:userId', authController.confirmEmail);
// Request password reset
router.post('/request-password-reset', authController.requestPasswordReset);
// Reset password
router.post('/reset-password', authController.resetPassword);

module.exports = router;
