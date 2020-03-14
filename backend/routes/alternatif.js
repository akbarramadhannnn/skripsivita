const express      = require('express')
const router       = express.Router()

const { TambahAlternatif, getAlternatif } = require('../controllers/alternatif')

router.get('/alternatif', getAlternatif)
router.post('/alternatif/tambah', TambahAlternatif)

module.exports = router