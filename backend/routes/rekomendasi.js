const express      = require('express')
const router       = express.Router()

const { 
    rekomendasi
} = require('../controllers/rekomendasi')

router.post('/rekomendasi', rekomendasi)

module.exports = router
