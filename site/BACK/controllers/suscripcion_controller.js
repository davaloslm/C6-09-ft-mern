const Suscripcion = require("../models/Suscripcion_newsletter");

exports.suscripcionNewsLetter = (req, res) =>{

    const {nombre, apellido, email} = req.body;

    console.log(nombre, apellido, email);

    const suscripcion = new Suscripcion({nombre, apellido, email})

    suscripcion.save((error, suscripcion)=>{
        if (error) return res.status(400).json({ error });
        if (suscripcion) {
        res.status(201).json({ suscripcion });
        }
    })
}

exports.eliminarSuscripcion = (req, res) =>{

    const {email} = req.body;

    Suscripcion.deleteOne( {email: { $eq: email}}, (error, response)=>{
        if (error) return res.status(400).json({ error });
        if (response) return res.status(200).json({ mensaje : "La suscripción se ha eliminado correctamente"});
    } )
}

exports.verTodosLosSuscriptores = (req, res) => {
  Suscripcion.find()
              .exec((error, suscriptores)=>{
                if(error) return res.status(400).json({ mensaje: 'Hubo un problema al obtener los suscriptores'})
                if(suscriptores) return res.status(200).json({ suscriptores})
              })
}