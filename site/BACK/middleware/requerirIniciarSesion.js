const jwt = require("jsonwebtoken");

exports.requerirIniciarSesion = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, token)  => {
      return res.status(200).json({message: 'Se valido correctamente la autorizacion'})
    });
// si el token es correcto nos devolvera los datos que pusimos en el token y lo guardamos en req.user
    req.user = user;
  } else {
    return res.status(400).json({ message: "Authorizacion requerida" });
  }
  next();
};