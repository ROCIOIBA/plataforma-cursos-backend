import express from "express";
import {
  registrarUsuario,
  loginUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} from "../controllers/usuarioController.js";

import { verCursosDelUsuario } from "../controllers/inscripcionController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// Rutas públicas
router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

// Rutas protegidas
router.get("/mis-cursos", authMiddleware, verCursosDelUsuario);

router.post("/logout", authMiddleware, (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/"
  });
  res.json({ message: "Sesión cerrada" });
});

// Rutas generales
router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);

router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

export default router;
