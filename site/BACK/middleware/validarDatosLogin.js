const {check } = require('express-validator');

exports.validarDatosLogin = [
  check('email')
  .notEmpty()
  .isString()
  .isEmail({ min: 8})
  .bail(),
  check('contraseña')
  .notEmpty()
  .isString()
  .custom(value => {
    console.log(value)
    const expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if(!value.match(expReg)){
      throw new Error('La contraseña debe tener entre 8 y 15 caracteres, como mínimo 1 mayúscula, 1 minúscula, 1 dígito y un caracter especial sin espacios en blanco')
    }
    return true;
  })
]