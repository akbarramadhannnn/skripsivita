const express      = require('express')
const router       = express.Router()

const { tambahSubKriteria, getSubKriteria, getSubkriteriaByIdKriteria } = require('../controllers/subkriteria')

router.get('/subkriteria', getSubKriteria)
router.get('/subkriteria/:idKriteria', getSubkriteriaByIdKriteria)
router.post('/subkriteria/tambah', tambahSubKriteria)

module.exports = router