exports.actualizarImagen = (filename) => {
  return `${process.env.HOST}:${process.env.PORT}/public/${filename}`
}