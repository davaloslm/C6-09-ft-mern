const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const suscripcionNewsLetterSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  }
}, {timestamps: true});


module.exports = mongoose.model('SuscripcionNewsLetter', suscripcionNewsLetterSchema)