import Curso from "../models/curso.js";

// CREAR CURSO
export const crearCurso = async (req, res) => {
  try {
    const nuevoCurso = await Curso.create(req.body);
    res.status(201).json({
      message: "Curso creado correctamente",
      curso: nuevoCurso,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear curso", error });
  }
};

// OBTENER TODOS
export const obtenerCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener cursos", error });
  }
};

// OBTENER POR ID
export const obtenerCursoPorId = async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if (!curso) return res.status(404).json({ message: "Curso no encontrado" });

    res.json(curso);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener curso", error });
  }
};

// ACTUALIZAR
export const actualizarCurso = async (req, res) => {
  try {
    const cursoActualizado = await Curso.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(cursoActualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar curso", error });
  }
};

// ELIMINAR
export const eliminarCurso = async (req, res) => {
  try {
    await Curso.findByIdAndDelete(req.params.id);
    res.json({ message: "Curso eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar curso", error });
  }
};
