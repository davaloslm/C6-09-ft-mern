const express = require('express');
const { inscribirCurso, obtenerInscripcionesCursos, obtenerInscripcionCurso } = require('../controllers/comprarCurso_controller');
const { requerirIniciarSesion } = require('../middleware/requerirIniciarSesion');
const router = express.Router()

router.post('/inscribir/:idUsuario/:idCurso', requerirIniciarSesion, inscribirCurso)
router.get('/inscribir/:idInscripcion', requerirIniciarSesion, obtenerInscripcionCurso)
router.get('/inscripciones/:idUsuario', requerirIniciarSesion, obtenerInscripcionesCursos)

module.exports = router;