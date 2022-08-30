const express = require('express');
const router = express.Router();
const {  suscripcionNewsLetter, eliminarSuscripcion, verTodosLosSuscriptores } = require('../controllers/suscripcion_controller');

// Routes
/**
 * @swagger
  * /suscribirse:
  *  post:
  *   summary: crear suscripción
  *   description: crear suscripción para el newsletter del centro cultural
  *   responses:
  *    201:
  *     description: suscripción creada correctamente
  *    400:
  *     description: error al crear suscripción
  */
router.post('/suscribirse', suscripcionNewsLetter);
router.delete('/suscribirse', eliminarSuscripcion);
router.get('/suscriptores', verTodosLosSuscriptores)

module.exports = router;