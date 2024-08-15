const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route lấy danh sách khách hàng
router.get('/customers', userController.getCustomers);

module.exports = router;