const express      = require('express')
const router       = express.Router()

const { TambahAlternatif, getAlternatif, getDetailAlternatif, updateAlternatif, deleteAlternatif } = require('../controllers/alternatif')

router.get('/alternatif', getAlternatif)
router.post('/alternatif/tambah', TambahAlternatif)
router.get('/alternatif/:id', getDetailAlternatif)
router.put('/alternatif/update/:id', updateAlternatif)
router.delete('/alternatif/delete/:id', deleteAlternatif)

module.exports = router