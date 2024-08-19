const express = require('express');
const router = express.Router();
const bodyguardController = require('../controllers/bodyguardController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route get body guard list
router.get('/', authMiddleware, bodyguardController.getBodyguards);

// Route get body guard by id
router.get('/:id', authMiddleware, bodyguardController.getBodyguardById);

module.exports = router;