const mongoose = require('mongoose');

const inscripcionSchema = new mongoose.Schema({
    usuario: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Usuario', 
      required: true},
    curso: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Curso', 
      required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Inscripcion', inscripcionSchema)