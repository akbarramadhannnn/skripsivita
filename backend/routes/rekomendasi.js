const express = require('express');
const router = express.Router();

const { rekomendasi, cariRekomendasi } = require('../controllers/rekomendasi');

router.post('/rekomendasi', rekomendasi);
router.post('/rekomendasi/cari', cariRekomendasi);

module.exports = router;
