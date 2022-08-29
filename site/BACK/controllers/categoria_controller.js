const Categoria = require("../models/Categoria");

exports.crearCategoria = (req, res) => {
  const { nombre } = req.body;
  console.log(nombre)

  const categoria = new Categoria({nombre})

  categoria.save((error, categoria) => {
    if (error) return res.status(400).json({ mensaje: 'Hubo un error al guardar en la base de datos' });
    if (categoria) {
      res.status(201).json({ categoria });
    }
  })
}

exports.obtenerCategoria = (req, res) => {
  const categorias = Categoria.find();
  
  categorias.exec((error, categorias) => {
    if(error) return res.status(400).json({ mensaje: 'Hubo un error al obtener las categorias de la base de datos' })
    if(categorias) {
      res.status(200).json({ categorias })
    }
  })
}