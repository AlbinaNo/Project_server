const Router = require('express')
const router = new Router()
const cardRouter = require('./cardRouter')
const userRouter = require('./userRouter')
const facultetRouter = require('./facultetRouter')
const groupRouter = require('./groupRouter')

router.use('/user', userRouter)
router.use('/group', groupRouter)
router.use('/facultet', facultetRouter)
router.use('/card', cardRouter)

module.exports = router