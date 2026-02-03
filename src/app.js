import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import cursoRoutes from "./routes/cursoRoutes.js";
import inscripcionRoutes from "./routes/inscripcionRoutes.js";
import conectarDB from "./config/database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
conectarDB();

const app = express();
app.use(cookieParser());
app.use(express.json());

// CORS DEFINITIVO PARA PRODUCCIÓN EN RENDER
app.use(
  cors({
    origin: [
      "https://plataforma-cursos-frontend-kfm6.onrender.com",
      "https://plataforma-cursos-frontend.onrender.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Rutas principales
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/cursos", cursoRoutes);
app.use("/api/inscripciones", inscripcionRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

export default app;
