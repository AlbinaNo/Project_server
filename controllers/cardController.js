/*const uuid = require('uuid')  // для генерирования уникал.имени файла/картинки*/
/*const path = require('path'); // д/работы с файлами/картинками, перпемещает папку static*/
const {Card} = require('../models/models')
const ApiError = require('../error/ApiError');

class CardController {
        async create(req, res, next) {
            try {
                let {card_fio, card_code, facultetId, groupId} = req.body
                /*const {img} = req.files
                let fileName = uuid.v4() + ".jpg"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))*/
                const card = await Card.create({card_fio, card_code, facultetId, groupId});
    
                return res.json(card)
            } catch (e) {
                next(ApiError.badRequest(e.message))
            }
            
        }
    
        async getAll(req, res) {
            const {facultetId, groupId} = req.query
        let card;
        if (!facultetId && !groupId) {
            card = await Card.findAll()
        }
        if (facultetId && !groupId) {
            card = await Card.findAll({where:{facultetId}})
        }
        if (!facultetId && groupId) {
            card = await Card.findAll({where:{groupId}})
        }
        if (facultetId && groupId) {
            card = await Card.findAll({where:{facultetId, groupId}})
        }
        return res.json(card)    
        }

        async getOne(req, res) {
            const {id} = req.params
            const card = await Card.findOne(
                {
                    where: {id}
                },
            )
        return res.json(card)
    }   
        }

    module.exports = new CardController()