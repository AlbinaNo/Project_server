const Router = require('express')
const router = new Router()
const facultetController = require('../controllers/facultetController')

router.post('/', facultetController.create)
router.get('/', facultetController.getAll)

module.exports = router