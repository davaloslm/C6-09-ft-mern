const Evento = require('../models/Evento')

exports.añadirEvento = (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      categoria,
      precio,
      fecha,
      stockEntradas
    } = req.body;

    const evento = new Evento({
      nombre,
      descripcion,
      categoria,
      precio,
      fecha,
      stockEntradas
    });
    
    if(req.file) {
      const { filename } = req.file;
      evento.setImgUrl(filename)
    }

    

    evento.save((error, evento) => {
      if (error) return res.status(400).json({ error });
      if (evento) {
        res.status(201).json({ evento, files: req.file });
      }
    });
  } catch(e) {
    res.status(500).send({ message: e.message })
  } 
}