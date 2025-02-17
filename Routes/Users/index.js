const express = require('express')
const router = express.Router()

const login = require('./login')
const register = require('./register')

router.get('/login', login)
router.post('/register', register)

module.exports = router