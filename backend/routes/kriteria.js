const express      = require('express')
const router       = express.Router()

const { tambahKriteria, getKriteria, getKriteriaById, perhitunganBobot } = require('../controllers/kriteria')

router.get('/kriteria', getKriteria)
router.get('/kriteria/:idKriteria', getKriteriaById)
router.post('/kriteria/tambah', tambahKriteria)
router.post('/kriteria/perhitunganbobot', perhitunganBobot)

module.exports = router