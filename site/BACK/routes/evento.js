const express = require('express');
const router = express.Router()

const { añadirEvento } = require('../controllers/evento_controller');
const upload = require('../middleware/storage');

router.post('/evento', upload.single('imagen'), añadirEvento );

module.exports = router;