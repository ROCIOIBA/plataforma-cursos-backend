import express from "express";
import {
  registrarUsuario,
  loginUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} from "../controllers/usuarioController.js";

const router = express.Router();

// ⭐ IMPORTANTE: las rutas específicas primero
router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

// Luego las rutas con parámetros
router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);

router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

export default router;
