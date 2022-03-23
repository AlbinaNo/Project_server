const {Group} = require('../models/models')
const ApiError = require('../error/ApiError');

class GroupController {
    async create(req, res) {
        const {group_name} = req.body
        const group = await Group.create({group_name})
        return res.json(group)
    }

    async getAll(req, res) {
        const groups = await Group.findAll()
        return res.json(groups)
    }

}

    module.exports = new GroupController() 