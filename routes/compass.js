const express = require('express');
const { getQiblahDirection } = require('../controllers/compass');

const router = express.Router();

router.get('/qiblah/:lat/:lon', getQiblahDirection);

module.exports = router;