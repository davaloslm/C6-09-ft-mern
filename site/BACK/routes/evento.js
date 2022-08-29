const express = require('express');
const router = express.Router()

const { añadirEvento, obtenerEvento, obtenerTodosLosEventos, actualizarEvento, eliminarEvento } = require('../controllers/evento_controller');
const upload = require('../middleware/storage');

router.post('/evento', upload.single('imagen'), añadirEvento );
router.get('/evento/:idEvento', obtenerEvento)
router.get('/evento', obtenerTodosLosEventos)
router.put('/evento/:idEvento', actualizarEvento)
router.delete('/evento/:idEvento', eliminarEvento)

module.exports = router;