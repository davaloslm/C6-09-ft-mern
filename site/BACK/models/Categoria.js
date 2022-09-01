const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    imagen: {
      type: String
    }
  },
  { timestamps: true }
);

categoriaSchema.methods.setImgUrl = function setImgUrl(filename) {
  this.imagen = `${process.env.HOST}:${process.env.PORT}/public/${filename}`
}

module.exports = mongoose.model("Categoria", categoriaSchema);
