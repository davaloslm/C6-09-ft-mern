const express = require('express');
const { crearCategoria, obtenerCategoria, obtenerTodasLasCategorias } = require('../controllers/categoria_controller');
const router = express.Router()
const upload = require('../middleware/storage');

router.post('/categoria', upload.single('imagen'), crearCategoria);
router.get('/categorias', obtenerTodasLasCategorias);
router.get('/categoria/:idCategoria', obtenerCategoria);

module.exports = router;