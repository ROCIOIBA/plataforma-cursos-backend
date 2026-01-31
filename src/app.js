import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import cursoRoutes from "./routes/cursoRoutes.js";
import inscripcionRoutes from "./routes/inscripcionRoutes.js";
import conectarDB from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();
conectarDB();

const app = express();

// Middleware
app.use(express.json());

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://plataforma-cursos-frontend.onrender.com"
    ],
    credentials: false,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
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
