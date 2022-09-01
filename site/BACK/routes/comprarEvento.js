const express = require('express');
const router = express.Router()
const { requerirIniciarSesion } = require('../middleware/requerirIniciarSesion');
const {realizarCompra, obtenerCompra, obtenerTodasCompras} = require("../controllers/comprarEvento_controller")


router.post('/comprar/:idUsuario/:idEvento', requerirIniciarSesion, realizarCompra)
router.get('/comprar/:idUsuario/:idCompra', requerirIniciarSesion, obtenerCompra)
router.get('/compras/:idUsuario', requerirIniciarSesion, obtenerTodasCompras)

module.exports = router;