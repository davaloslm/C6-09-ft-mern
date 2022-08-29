const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");

exports.registrarUsuario = (req, res) => {
  const erroresDatos = validationResult(req);
  
  if(erroresDatos.isEmpty()) {
    const { nombre, apellido, dni, email, contraseña } = req.body;

    const hash_password = bcrypt.hashSync(contraseña, 10)
    const usuario = new Usuario({ nombre, apellido, dni, email, hash_password: hash_password })
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
      if(error) return res.status(400).json({mensaje: 'El Id de usuario no existe en la base de datos'})
      if(usuario) return res.status(200).json({ usuario })
    })
  } else {
    return res.status(400).json({ mensaje: 'El Id de usuario no es válido.'})
  }
}

exports.iniciarSesion = (req, res) => {
  const erroresDatos = validationResult(req);
  const { email, contraseña } = req.body;
  
  if(erroresDatos.isEmpty()) {
    Usuario.findOne({email: email}, (error, usuario) => {
      if(error) return res.status(400).json({mensaje: 'El usuario no existe en la base de datos'})
      if(usuario) {
        console.log(usuario)
        if(usuario.authenticate(contraseña)) {
          const token = jwt.sign({usuario: usuario._id, email: usuario.email, rol: usuario.rol }, process.env.JWT_SECRET, {expiresIn: '1d'})
          if(token) {
            return res.status(200).json({ token, usuario })
          }
        } else {
          return res.status(400).json({mensaje: 'La contraseña ingresada no es correcta'})
        }
      } 
    })
  } else {
    return res.status(400).json({ mensaje: 'los datos ingresados no son válidos' })
  }
}

exports.actualizarPerfil = (req,res)=>{
  const { idUsuario } = req.params;
  console.log(idUsuario)
  const { nombre, apellido, dni, email, contraseña } = req.body;
  let imagenUsuario;
  
  if(idUsuario){
    const usuario = Usuario.findOne({_id: idUsuario}, (error, usuario) => {
      if(error) return res.status(400).json({mensaje: 'El Id de usuario no se encuentra en la base de datos.'})
      if(usuario) return res.status(200).json({ usuario })
    })
    if(req.file) {
      imagenUsuario = usuario.setImgUrl(req.file.filename);
    }
    usuario.updateOne(
        {
        nombre,
        apellido,
        dni,
        email,
        imagenUsuario,
        hash_password: contraseña
      }, (error, usuarioActualizado)=>{
          if(error) return res.status(400).json({ mensaje:'hubou n problema al actgualiazar' })
          if(curso) return res.status(200).json({ usuarioActualizado })
      });

      }
  else{
      return res.status(400).json({mensaje: "No se pudo modificar el curso"})
  }
}

exports.cerrarSesion = (req, res) => {
  req.user  = '';
//  delete req.headers;
  //const headders = req.headers;
  //headders.delete('Authorization')
  const authorization= { authorization: ""};
  //console.log(req.headers)
  Object.assign(req.headers, authorization)
  console.log(req.headers)

  return res.status(200).json({
    mensaje: "Se ha cerrado sesion exitosamente...!",
    headers: req.headers
  });
}

exports.eliminarUsuario = (req, res) => {
  const { idUsuario } = req.params;

  if(idUsuario){
    Usuario.deleteOne({_id: idUsuario}, (error, usuario) =>{
      if(error) return res.status(400).json({ mensaje: 'El usuario no existe en la base de datos.'})
      if(usuario) return res.status(200).json({mensaje: 'El usuario ha sido eliminado.'})
    })
  } else {
    return res.status(400).json({ mensaje: 'No se ha proporcionado un Id de usuario.'})
  }
}