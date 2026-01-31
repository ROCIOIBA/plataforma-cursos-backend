import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    nivel: {
      type: String,
      enum: ["principiante", "intermedio", "avanzado"],
      default: "principiante",
    },
    profesor: {
      type: String,
      required: true,
    }, 
    imagen: {
  type: String,
  default: "https://picsum.photos/400/250?random=" + Math.floor(Math.random() * 1000)
}

  },
  {
    timestamps: true,
  }
);

const Curso = mongoose.model("Curso", cursoSchema);

export default Curso;
