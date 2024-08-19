const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get all services
router.get('/', authMiddleware, serviceController.getServices);

// Get service by id
router.get('/:id', authMiddleware, serviceController.getServiceById);

module.exports = router;