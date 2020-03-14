const express      = require('express')
const router       = express.Router()

const { login, daftar } = require('../controllers/auth')

router.post('/login', login)
router.post('/daftar', daftar)

module.exports = router