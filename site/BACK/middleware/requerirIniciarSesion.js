const jwt = require("jsonwebtoken");

exports.requerirIniciarSesion = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const usuario = jwt.verify(token, process.env.JWT_SECRET)
// si el token es correcto nos devolvera los datos que pusimos en el token y lo guardamos en req.user
    console.log('Se valido correctamente la autorizacion')
    req.usuario = usuario;
  } else {
    return res.status(400).json({ message: "Authorizacion requerida" });
  }
  console.log('insresa a l controlador')

  next();
};