const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
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
  dni: {
    type: String,
    required: true,
    min: 7,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    min: 8
  },
  imagenUsuario: {
    type: String,
  },
  hash_password: {
    type: String,
    required: true
},
rol: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
}
}, {timestamps: true});

usuarioSchema.virtual('password')
          .set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10)
});

usuarioSchema.methods = {
  authenticate: function(password){
      return bcrypt.compare(password, this.hash_password)
  }
}

module.exports = mongoose.model('Usuario', usuarioSchema)