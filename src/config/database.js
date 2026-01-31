import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Asegura que se lea el .env

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI no está definido en el archivo .env");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err.message);
    process.exit(1);
  });
