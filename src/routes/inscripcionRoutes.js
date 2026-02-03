
import express from "express";
import { inscribirUsuario } from "../controllers/inscripcionController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// Inscribir a un curso
router.post("/:cursoId", authMiddleware, inscribirUsuario);

export default router;
