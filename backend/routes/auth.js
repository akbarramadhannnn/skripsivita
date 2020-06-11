const express      = require('express')
const router       = express.Router()

const { login, daftar, getAllUser } = require('../controllers/auth')

router.post('/login', login)
router.post('/daftar', daftar)
router.get('/user', getAllUser)

module.exports = router