import mongoose from "mongoose";

const inscripcionSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    curso: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Curso",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Inscripcion = mongoose.model("Inscripcion", inscripcionSchema);

export default Inscripcion;
