const Usuario = require('../models/Usuario')
const Curso = require('../models/Curso')
const Inscripcion = require('../models/Inscripcion')

exports.inscribirCurso = (req, res) => {
  const { idUsuario, idCurso } = req.params;
  console.log('ingresandooo al controlador')

  if( idCurso ){
    const inscripcionCurso = new Inscripcion({usuario: idUsuario, curso: idCurso })

    inscripcionCurso.save((error, inscripcionCurso) => {
      if(error) return res.status(400).json({ mensaje: 'Hubo un error al realizar la inscripcion alcurso'})
      if(inscripcionCurso) return res.status(201).json({inscripcionCurso, mensaje: 'La inscripción se ha realizado correctamente.' })
    })
  } else {
      return res.status(400).json({ mensaje: 'No se envio el id de curso '})
    }
  }

exports.obtenerInscripcionCurso = (req, res) => {
  const { idUsuario, idInscripcion } = req.params;
  if( idInscripcion ){
    Inscripcion.findOne({_id: idInscripcion})
              .populate("usuario", "_id nombre apellido dni email imagenUsuario")
              .populate("curso", "_id nombre categoriaCurso descripcion diasDeCurso horariosDeCurso vacantes precio coordinador" )
              .exec((error, inscripcionCurso) => {
                if (error) return res.status(400).json({ mensaje: 'No se encontro el Id del curso' });
                if (inscripcionCurso) {
                  return res.status(200).json({ inscripcionCurso });
                }
              });
  } else {
    return res.status(400).json({mensaje: 'El Id de inscripcion no es correcto'})
  }
}
exports.obtenerInscripcionesCursos = (req, res) => {
  const {idUsuario} = req.params;

  if( idUsuario ){
    Inscripcion.find({usuario: idUsuario})
      .populate("usuario", "_id nombre apellido dni email imagenUsuario")
      .populate("curso", "_id nombre categoriaCurso diasDeCurso horariosDeCurso" )
      .exec((error, inscripcionesDelUsuario) => {
      if(error) return res.status(400).json({mensaje: 'Hubo un problema al buscar las inscripciones en la base de datos'})
      if(inscripcionesDelUsuario) return res.status(200).json({ inscripcionesDelUsuario });
      })
  } else {
    return res.status(400).json({mensaje: 'Ingrese un Id de Usuario válido'})
  }
}