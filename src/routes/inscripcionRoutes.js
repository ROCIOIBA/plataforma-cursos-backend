import express from "express";
import {
  inscribirUsuario,
  verCursosDelUsuario
} from "../controllers/inscripcionController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// Inscribir usuario a un curso (requiere token)
router.post("/", authMiddleware, inscribirUsuario);

// Obtener cursos del usuario logueado (requiere token)
router.get("/mis-cursos", authMiddleware, verCursosDelUsuario);

export default router;
