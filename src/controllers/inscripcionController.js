import Inscripcion from "../models/inscripcion.js";

// INSCRIBIR USUARIO A UN CURSO (usa el token, no el body)
export const inscribirUsuario = async (req, res) => {
  try {
    const usuarioId = req.usuarioId; // viene del token
    const { cursoId } = req.body;

    // Validar si ya está inscrito
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
    res.status(500).json({ message: "Error al inscribir usuario", error });
  }
};

// OBTENER CURSOS DEL USUARIO LOGUEADO
export const verCursosDelUsuario = async (req, res) => {
  try {
    const usuarioId = req.usuarioId; // viene del token

    const inscripciones = await Inscripcion.find({ usuario: usuarioId })
      .populate("curso");

    // Solo devolvemos los cursos, no toda la inscripción
    const cursos = inscripciones.map((i) => i.curso);

    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener cursos del usuario", error });
  }
};
