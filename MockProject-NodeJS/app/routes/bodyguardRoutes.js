const express = require('express');
const router = express.Router();
const bodyguardController = require('../controllers/bodyguardController');

// Route lấy danh sách vệ sĩ
router.get('/', bodyguardController.getBodyguards);

// Route lấy thông tin vệ sĩ theo id
router.get('/:id', bodyguardController.getBodyguardById);

module.exports = router;