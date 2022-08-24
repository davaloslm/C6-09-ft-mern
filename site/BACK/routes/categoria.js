const express = require('express');
const { crearCategoria, obtenerCategoria } = require('../controllers/categoria_controller');
const router = express.Router()

router.post('/categoria', crearCategoria);
router.get('/categoria', obtenerCategoria);

module.exports = router;