const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');

exports.registrarUsuario = (req, res) => {
  const erroresDatos = validationResult(req);
  
  if(erroresDatos.isEmpty()) {
    const { nombre, apellido, dni, email, contraseña } = req.body;

    //const hash_password = bcrypt
    const usuario = new Usuario({ nombre, apellido, dni, email, hash_password: contraseña })
    usuario.save((error, response) => {
      if(error) return res.status(400).json({mensaje: 'Hubo un problema al crear el usuario'});
      if(response) return res.status(201).json({ response });
    })
  } else {
    console.log(erroresDatos)
    return res.status(400).json({mensaje: 'Los datos ingresados no son válidos'});
  }

}
exports.obtenerDatosUsuario = (req, res) => {
  const { idUsuario } = req.params;
  if(idUsuario) {
    Usuario.findOne({_id: idUsuario}, (error, usuario) => {
      if(error) return res.status(400).json({message: 'El Id de usuario no existe en la base de datos'})
      if(usuario) return res.status(200).json({ usuario })
    })
  } else {
    return res.status(400).json({ message: 'El Id de usuario no es válido.'})
  }
}

exports.iniciarSesion = (req, res) => {

}

exports.actualizarPerfil = (req, res) => {

}

exports.cerrarSesion = (req, res) => {

}