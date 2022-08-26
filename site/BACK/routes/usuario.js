const express = require('express');
const { registrarUsuario, iniciarSesion, actualizarPerfil, cerrarSesion } = require('../controllers/usuario_controller');
const { validarDatos } = require('../middleware/validarDatosRegistro')

const router = express.Router()

router.post('/registrarse', validarDatos ,registrarUsuario)
router.get('/perfil/:idUsuario', obtenerDatosUsuario)
router.post('/iniciarSesion', iniciarSesion)
router.put('/actualizarPerfil', actualizarPerfil)
router.get('/cerrarsesion', cerrarSesion)

// requerirIniciadaSesion, verificarUsuario,
module.exports = router;