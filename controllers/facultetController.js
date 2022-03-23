const {Facultet} = require('../models/models')
const ApiError = require('../error/ApiError');

class FacultetController {
    async create(req, res) {
        const {facultet_name} = req.body
        const facultet = await Facultet.create({facultet_name})
        return res.json(facultet)
    }

    async getAll(req, res) {
        const facultets = await Facultet.findAll()
        return res.json(facultets)
    }
}

    module.exports = new FacultetController() 