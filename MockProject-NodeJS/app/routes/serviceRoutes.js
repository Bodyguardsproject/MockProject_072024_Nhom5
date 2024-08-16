const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Get all services
router.get('/', serviceController.getServices);

// Get service by id
router.get('/:id', serviceController.getServiceById);

module.exports = router;