const jwt = require("jsonwebtoken");

exports.requerirIniciarSesion = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const usuario = jwt.verify(token, process.env.JWT_SECRET)
    console.log(usuario)
    console.log(typeof JSON.stringify(usuario._id))
    console.log(typeof req.params.idUsuario/*  */)
    console.log(usuario._id)
    console.log(req.params.idUsuario)

    if(usuario.usuario === req.params.idUsuario) {
// si el token es correcto nos devolvera los datos que pusimos en el token y lo guardamos en req.user
      console.log('Se valido correctamente la autorizacion')
      req.usuario = usuario;
    } else {
      console.log('El Id de usuario del token no coincide con el id de usuario del parametro')
      return res.status(400).json({ message: "El Id de usuario del token no coincide con el id de usuario del parametro" });
    }
  } else {
    return res.status(400).json({ message: "Authorizacion requerida" });
  }
  console.log('ingresa a l controlador')

  next();
};