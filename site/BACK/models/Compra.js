const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    usuario: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Usuario', 
      required: true},
    evento: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Evento', 
      required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Compra', compraSchema)