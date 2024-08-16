const Service = require('../models/serviceModel');

exports.getServices = async (req, res) => {
    try {
        const services = await Service.getAll();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getServiceById = async (req, res) => {
    const id = req.params.id;
    try {
        const service = await Service.getById(id);
        res.json(service);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
