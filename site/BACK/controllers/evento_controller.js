const Evento = require('../models/Evento')

exports.añadirEvento = (req, res) => {
  try {
    const {   
      nombre,
      descripcion,
      categoria,
      precio,
      fecha,
      stockEntradas,
      horarios,
      fechaDeInicio,
      fechaDeFinalizacion,
      autor,
      produccion,
      director,
      elenco,
      idea,
      musica,
      reemplazo,
      funciones
    } = req.body;
console.log(req.body)
console.log(req)
    const evento = new Evento({
      nombre,
      descripcion,
      categoria,
      precio,
      fecha,
      stockEntradas,
      horarios,
      fechaDeInicio,
      fechaDeFinalizacion,
      autor,
      produccion,
      director,
      elenco,
      idea,
      musica,
      reemplazo,
      funciones
    });
    
    if(req.file) {
      const { filename } = req.file;
      evento.setImgUrl(filename)
    }
    console.log(req.file.filename)
    

    evento.save((error, evento) => {
      if (error) return res.status(400).json({ error });
      if (evento) {
        return res.status(201).json({ evento });
      }
    });
  } catch(e) {
    return res.status(500).send({ mensaje: e.message })
  }
}

exports.obtenerEvento = (req, res) => {
  const { idEvento } = req.params;

  if(idEvento) {
    Evento.findOne({_id: idEvento}, (error, evento) => {
      if(error) return res.status(400).json({mensaje: 'El Id de evento no se encuentra en la base de datos'})
      if(evento) return res.status(200).json({ evento })
    })
  } else {
    return res.status(400).json({mensaje: 'No se ha proporcionado un Id de evento'})
  }
}
exports.obtenerTodosLosEventos = (req, res) => {
  const eventos = Evento.find();
  
  eventos.exec((error, evento) => {
    if(error) return res.status(400).json({ error })
    if(evento) {
      res.status(200).json({ evento })
    }
  })
}
exports.actualizarEvento = (req, res) => {
  const {idEvento} = req.params;
  console.log(idEvento)
  const {   
    nombre,
    descripcion,
    categoria,
    precio,
    fecha,
    stockEntradas,
    horarios,
    fechaDeInicio,
    fechaDeFinalizacion,
    autor,
    produccion,
    director,
    elenco,
    idea,
    musica,
    reemplazo,
    funciones
  } = req.body;
  let imagen;

  if(req.file){
    imagen= req.file.filename;
  }

  if(idEvento){
      Evento.updateOne({_id: _idEvento}, {nombre, descripcion, categoria, precio, fecha, stockEntradas, horarios, fechaDeInicio, fechaDeFinalizacion, imagen: imagen, autor, produccion, director, elenco, idea, musica, reemplazo, funciones}, (error, curso)=>{
          if(error) return res.status(400).json({ error })
          if(curso) return res.status(200).json({mensaje: 'El evento se ha actualizado correctamente' })
      });
      }
  else{
      res.status(400).json({mensaje: "No se pudo modificar el curso"})
  }
}
exports.eliminarEvento = (req, res) => {
  const {idEvento} = req.params;

  if(idEvento){
    Evento.deleteOne({_id: idEvento}, (error, evento) =>{
      if(error) return res.status(400).json({ mensaje: 'El evento no existe en la base de datos.'})
      if(evento) return res.status(200).json({mensaje: 'El evento ha sido eliminado.'})
    })
  } else {
    return res.status(400).json({ mensaje: 'No se ha proporcionado un Id de evento.'})
  }
}