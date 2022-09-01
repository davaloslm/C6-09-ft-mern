const express = require('express');
const { registrarUsuario, iniciarSesion, actualizarPerfil, cerrarSesion, obtenerDatosUsuario, eliminarUsuario } = require('../controllers/usuario_controller');
const { validarDatos } = require('../middleware/validarDatosRegistro')
const { validarDatosLogin } = require('../middleware/validarDatosLogin');
const { requerirIniciarSesion } = require('../middleware/requerirIniciarSesion');

const router = express.Router()

router.post('/registrarse', validarDatos,registrarUsuario)
router.get('/perfil/:idUsuario', requerirIniciarSesion, obtenerDatosUsuario)
router.post('/iniciarSesion', validarDatosLogin, iniciarSesion)
router.put('/actualizarPerfil/:idUsuario',requerirIniciarSesion, actualizarPerfil);
router.get('/cerrarSesion/:idUsuario', requerirIniciarSesion, cerrarSesion)
router.get('/eliminarUsuario/:idUsuario', requerirIniciarSesion, eliminarUsuario)

module.exports = router;