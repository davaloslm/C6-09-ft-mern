const express = require('express');
const router = express.Router();
const {  suscripcionNewsLetter, eliminarSuscripcion } = require('../controllers/suscripcion_controller');

router.post('/suscribirse', suscripcionNewsLetter);
router.delete('/suscribirse', eliminarSuscripcion); 

module.exports = router;