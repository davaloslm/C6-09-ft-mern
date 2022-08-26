const Curso = require("../models/Curso");

exports.crearCurso = (req,res)=>{

    const { nombre, categoriaCurso, descripcion, diasDeCurso, horariosDeCurso, vacantes, precio, imagen, coordinador  } = req.body;
    console.log()

    if(nombre && categoriaCurso && descripcion && diasDeCurso && horariosDeCurso && vacantes && precio){

        const curso = new Curso({nombre, categoriaCurso, descripcion, diasDeCurso, horariosDeCurso, vacantes, precio, imagen, coordinador})

        curso.save((error, curso) => {
            if (error) return res.status(400).json({ error });
            if (curso) return res.status(201).json({ curso });
        })
    }else{
        res.status(400).json({"message": "Faltan datos para poder crear el curso"})
    }
    
}

exports.obtenerCurso = (req,res)=>{

    const {id} = req.body;

    if(id){

        Curso.findOne({_id: id}, (error, curso)=>{
            if(error) return res.status(400).json({ error })
            if(curso) return res.status(200).json({ curso })
        });

        }
    else{
        res.status(400).json({"message": "Ingrese un id"})
    }

}

exports.obtenerTodosLosCursos = (req,res)=>{

    const cursos = Curso.find();

    if(cursos){

        cursos.exec((error, cursos) => {
            if(error) return res.status(400).json({ error })
            if(cursos) {
            res.status(200).json({ cursos })
            }
        })
    }else{
        res.status(400).json({"message": "No existen cursos en la base de datos"})
    }
  
}

exports.actualizarCurso = (req,res)=>{

    const {id} = req.params;

    const { nombre, categoriaCurso, descripcion, diasDeCurso, horariosDeCurso, vacantes, precio, imagen, coordinador} = req.body;

    if(id){

        Curso.updateOne({_id: id}, {nombre, categoriaCurso, descripcion, diasDeCurso, horariosDeCurso, vacantes, precio, imagen, coordinador}, (error, curso)=>{
            if(error) return res.status(400).json({ error })
            if(curso) return res.status(200).json({ curso })
        });

        }
    else{
        res.status(400).json({"message": "No se pudo modificar el curso"})
    }


}

exports.eliminarCurso = (req,res)=>{

    const {id} = req.params;

    if(id){
        Curso.deleteOne( {_id: { $eq: id}}, (error, response)=>{
            if (error) return res.status(400).json({ error });
            if (response) return res.status(200).json({"message": "El curso se ha eliminado correctamente"});
        } )

    }else{
        res.status(400).json({"message": "Ingrese un id"})        
    }


}