const express = require('express')
const router = express.Router()

const users = require('./Users')

router.use('/users', users)


module.exports = router
