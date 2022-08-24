const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cursoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      min: 5,
      max: 30,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
      min: 20,
      max: 200,
    },
    fechaDeInicio: {
      type: Date,
      required: true,
    },
    fechaDeFinalizacion: {
      type: Date,
      required: true,
    },
    vacantes: {
      type: Number,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    imagen: {
      type: String,
    },
    coordinador: {
      type: String,
      trim: true,
      min: 5,
      max: 30,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Curso", cursoSchema);
