import Inscripcion from "../models/inscripcion.js";

// INSCRIBIR A UN CURSO
export const inscribirUsuario = async (req, res) => {
  try {
    const { cursoId } = req.params;
    const usuarioId = req.usuarioId; // viene del authMiddleware

    const existe = await Inscripcion.findOne({ usuario: usuarioId, curso: cursoId });
    if (existe) {
      return res.status(400).json({ message: "Ya estás inscrito en este curso" });
    }

    const nuevaInscripcion = await Inscripcion.create({
      usuario: usuarioId,
      curso: cursoId,
    });

    res.status(201).json({
      message: "Inscripción exitosa",
      inscripcion: nuevaInscripcion,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al inscribirse", error });
  }
};

// VER CURSOS DEL USUARIO
export const verCursosDelUsuario = async (req, res) => {
  try {
    const usuarioId = req.usuarioId;

    const inscripciones = await Inscripcion.find({ usuario: usuarioId })
      .populate("curso");

    const cursos = inscripciones.map((i) => i.curso);

    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener cursos del usuario", error });
  }
};
