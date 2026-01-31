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

// FIX PARA RENDER
app.use(express.json({ type: "*/*" }));

// Rutas principales
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/cursos", cursoRoutes);
app.use("/api/inscripciones", inscripcionRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "API Plataforma de Cursos funcionando" });
});

// ⭐⭐⭐ AGREGAR ACÁ LA RUTA DE DEPURACIÓN ⭐⭐⭐
import mongoose from "mongoose";

app.get("/api/debug/db", async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json(collections.map(c => c.name));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default app;

