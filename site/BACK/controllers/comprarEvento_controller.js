const Usuario = require('../models/Usuario')
const Compra = require('../models/Compra')
const Evento = require('../models/Evento')

exports.realizarCompra = (req, res) =>{

   const { idUsuario, idEvento } = req.params;

    if(idEvento){

        const compraEvento = new Compra({usuario: idUsuario, evento:idEvento})

        compraEvento.save((error, compra)=>{
            if(error) return res.status(400).json({ mensaje: 'Hubo un error al realizar la compra'})
            if(compra) return res.status(201).json({compra, mensaje: 'La compra se ha realizado correctamente.' })
        })

    }else{
        return res.status(400).json({ mensaje: 'No se envió el id del evento '})

    }

}

exports.obtenerCompra = (req, res) => {

    const { idCompra} = req.params;

    if(idCompra){
        Compra.findOne({_id: idCompra})
            .populate("usuario", "_id nombre apellido dni email imagenUsuario")
            .populate("evento", "_id nombre descripcion_card categoria precio fecha imagen horarios funciones ")
            .exec((error, compra)=>{
                if (error) return res.status(400).json({ mensaje: 'No se encontro el Id del evento' });
                if (compra) return res.status(200).json({ compra });
            })
    }else {
        return res.status(400).json({mensaje: 'El Id de compra no es correcto'})
      }

}

exports.obtenerTodasCompras = (req, res) =>{

    const {idUsuario} = req.params;

    console.log(idUsuario);

    if(idUsuario){
        Compra.find({usuario:idUsuario})
            .populate("usuario", "_id nombre apellido dni email imagenUsuario")
            .populate("evento", "_id nombre descripcion_card categoria precio fecha imagen horarios funciones ")
            .exec((error, comprasDelUsuario)=>{
                if(error) return res.status(400).json({mensaje: 'Hubo un problema al buscar las compras en la base de datos'})
                if(comprasDelUsuario) return res.status(200).json({ comprasDelUsuario });
            })
    }else{
        return res.status(400).json({mensaje: 'Ingrese un Id de Usuario válido'})
    }

}