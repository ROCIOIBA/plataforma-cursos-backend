import express from "express";
import {
  inscribirUsuario,
  verCursosDelUsuario
} from "../controllers/inscripcionController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// Inscribir a un curso por ID en la URL
router.post("/:cursoId", authMiddleware, inscribirUsuario);

router.get("/mis-cursos", authMiddleware, verCursosDelUsuario);

export default router;
