const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route get list customer
router.get('/customers', authMiddleware, userController.getCustomers);

module.exports = router;