
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const eventoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    min: 5,
    max: 30
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
    min: 20,
    max: 300
  },
  categoria:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Categoria', 
    required: true
  },
  precio: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  imagen: {
    type: String,
  },
  stockEntradas:{
    type: Number,
    required: true,
  },
  horarios: {
    type: String,
  },
  fechaDeInicio: {
    type: Date,
  },
  fechaDeFinalizacion: {
    type: Date,
  },
  autor: {
    type: String,
    trim: true,
  },
  produccion: {
    type: String,
  },
  director: {
    type: String,
    trim: true,
  },
  elenco: {
    type: String,
  },
  idea:{
    type: String,
  },
  musica:{
    type: String,
  },
  reemplazo:{
    type: String,
  },
  funciones:{
    type: String,
  },

}, {timestamps: true});

module.exports = mongoose.model('Evento', eventoSchema)