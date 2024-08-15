const Bodyguard = require('../models/bodyGuardModel');

exports.getBodyguards = async (req, res) => {
    try {
        const bodyguards = await Bodyguard.getAll();
        res.json(bodyguards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBodyguardById = async (req, res) => {
    const id = req.params.id;
    try {
        const bodyguard = await Bodyguard.getById(id);
        res.json(bodyguard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};