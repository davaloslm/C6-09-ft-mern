const express = require('express');
const { crearCurso, obtenerCurso, obtenerTodosLosCursos, actualizarCurso, eliminarCurso} = require('../controllers/curso_controller');
const router = express.Router()

router.post('/curso', crearCurso);
router.get('/curso/:id', obtenerCurso);
router.get('/cursos', obtenerTodosLosCursos);
router.put('/curso/:id', actualizarCurso);
router.delete('/curso/:id', eliminarCurso);

module.exports = router;