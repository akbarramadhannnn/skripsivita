const express      = require('express')
const router       = express.Router()

const { calculateFAHP } = require('../controllers/f-ahp');

router.get('/fahp/:id', calculateFAHP);

module.exports = router;
