import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuarioRoutes.js";
import cursoRoutes from "./routes/cursoRoutes.js";
import inscripcionRoutes from "./routes/inscripcionRoutes.js";

const app = express();

// CORS para local y producción
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://plataforma-cursos-frontend-kfm6.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware para JSON
app.use(express.json());

// Rutas principales
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/cursos", cursoRoutes);
app.use("/api/inscripciones", inscripcionRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "API Plataforma de Cursos funcionando" });
});

// Export ES Modules (correcto para Render)
export default app;
