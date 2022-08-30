const Categoria = require("../models/Categoria");

exports.crearCategoria = (req, res) => {
  const { nombre } = req.body;
  console.log(nombre)

  const categoria = new Categoria({nombre})
  if(req.file) {
    const { filename } = req.file;
    categoria.setImgUrl(filename);
  }

  categoria.save((error, categoria) => {
    if (error) return res.status(400).json({ mensaje: 'Hubo un error al guardar en la base de datos' });
    if (categoria) {
      res.status(201).json({ categoria });
    }
  })
}

exports.obtenerTodasLasCategorias = (req, res) => {
  const categorias = Categoria.find();
  
  categorias.exec((error, categorias) => {
    if(error) return res.status(400).json({ mensaje: 'Hubo un error al obtener las categorias de la base de datos' })
    if(categorias) {
      res.status(200).json({ categorias })
    }
  })
}

exports.obtenerCategoria = (req, res) => {
  const { idCategoria } = req.params;
  
  if( idCategoria ) {
    const categoria = Categoria.findOne({ _id: idCategoria });
    categoria.exec((error, categoria) => {
      if(error) return res.status(400).json({ mensaje: 'Hubo un error al obtener la categoria de la base de datos' })
      if(categoria) return res.status(200).json({ categoria })
    })
  } else {
    return res.status(400).json({ mensaje: 'Ingrese un Id de categoria válido.'})
  }
}