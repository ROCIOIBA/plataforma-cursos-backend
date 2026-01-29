import express from "express";
import {
  crearCurso,
  obtenerCursos,
  obtenerCursoPorId,
  actualizarCurso,
  eliminarCurso
} from "../controllers/cursoController.js";

const router = express.Router();

// GET /api/cursos → obtener todos los cursos
router.get("/", obtenerCursos);

// GET /api/cursos/:id → obtener un curso por ID
router.get("/:id", obtenerCursoPorId);

// POST /api/cursos → crear curso
router.post("/", crearCurso);

// PUT /api/cursos/:id → actualizar curso
router.put("/:id", actualizarCurso);

// DELETE /api/cursos/:id → eliminar curso
router.delete("/:id", eliminarCurso);

export default router;
