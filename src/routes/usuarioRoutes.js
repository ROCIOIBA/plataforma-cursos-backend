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

router.post("/registro", registrarUsuario);
router.post("/login", loginUsuario);

router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);

router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

export default router;
