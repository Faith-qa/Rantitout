const express = require('express')
const router = express.Router();

const {generateAffirmations} = require('../controllers/affirmations')

router.post('/', generateAffirmations)

module.exports = router