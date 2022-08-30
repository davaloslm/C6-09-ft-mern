const Evento = require("../models/Evento");

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
      funciones,
    } = req.body;
    console.log(req.body);
    console.log(req);
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
      funciones,
    });

    if (req.file) {
      const { filename } = req.file;
      evento.setImgUrl(filename);
    }
    console.log(req.file.filename);

    evento.save((error, evento) => {
      if (error) return res.status(400).json({ error });
      if (evento) {
        return res.status(201).json({ evento });
      }
    });
  } catch (e) {
    return res.status(500).send({ mensaje: e.message });
  }
};

exports.obtenerEvento = (req, res) => {
  const { idEvento } = req.params;

  if (idEvento) {
    Evento.findOne({ _id: idEvento })
      .populate({ path: "categoria", select: "_id name imagen" })
      .exec((error, evento) => {
        if (error)
          return res
            .status(400)
            .json({
              mensaje: "El Id de evento no se encuentra en la base de datos",
            });
        if (evento) return res.status(200).json({ evento });
      });
  } else {
    return res
      .status(400)
      .json({ mensaje: "No se ha proporcionado un Id de evento" });
  }
};
exports.obtenerTodosLosEventos = (req, res) => {
  const eventos = Evento.find();

  eventos.exec((error, evento) => {
    if (error) return res.status(400).json({ error });
    if (evento) return res.status(200).json({ evento });
  });
};

exports.actualizarEvento = async(req, res) => {
  const { idEventoo } = req.params;
  console.log(req.params)
  console.log(req.file)
  console.log(idEventoo);
  const {
    nombre,
    descripcion_card,
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
    genero,
    director,
    elenco,
    idea,
    musica,
    reemplazo,
    funciones,
    origen,
    año,
    duracion,
  } = req.body;
  //let imagenNueva;
  console.log(idEventoo)
  try {
  if (idEventoo) {
    const evento = await Evento.findOne({ _id: idEventoo })
    console.log(evento)
    console.log(req.file)
    console.log('el nuevi eventoooo')

    await evento.updateOne(
      {
        nombre,
        descripcion_card,
        descripcion,
        categoria,
        precio,
        fecha,
        imagen: req.file.filename,
        stockEntradas,
        horarios,
        fechaDeInicio,
        fechaDeFinalizacion,
        autor,
        produccion,
        genero,
        director,
        elenco,
        idea,
        musica,
        reemplazo,
        funciones,
        origen,
        año,
        duracion
      }, {new: true})
/*      async(error, eventoActualizado) => {
        if (error)
          return res
            .status(400)
            .json({ mensaje: "Hubo un problema al actualizar el evento" });
        if (eventoActualizado){
          if (req.file) {
          return await evento.setImgUrl(req.file.filename);
          }
          console.log(evento)

          return res.status(200).json({ eventoActualizado });
        
      }
    );}*/
  } else {
    return res.status(400).json({ mensaje: "El Id de evento no es correcto" });
  }
} catch (e) {
  return res.status(500).json({mensaje: 'Hubo un error en el servidor'})
}
};

exports.eliminarEvento = (req, res) => {
  const { idEvento } = req.params;

  if (idEvento) {
    Evento.deleteOne({ _id: idEvento }, (error, evento) => {
      if (error)
        return res
          .status(400)
          .json({ mensaje: "El evento no existe en la base de datos." });
      if (evento)
        return res
          .status(200)
          .json({ mensaje: "El evento ha sido eliminado." });
    });
  } else {
    return res
      .status(400)
      .json({ mensaje: "No se ha proporcionado un Id de evento." });
  }
};
