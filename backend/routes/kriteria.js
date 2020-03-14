const express      = require('express')
const router       = express.Router()

const { tambahKriteria, getKriteria, getKriteriaById } = require('../controllers/kriteria')

router.get('/kriteria', getKriteria)
router.get('/kriteria/:idKriteria', getKriteriaById)
router.post('/kriteria/tambah', tambahKriteria)

module.exports = router