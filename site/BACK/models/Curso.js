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
    categoriaCurso: {
      type: String,
      required: true,
      trim: true,
      min: 4,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
      min: 20,
      max: 200,
    },
    diasDeCurso: {
      type: String,
      required: true,
    },
    horariosDeCurso: {
      type: String,
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
