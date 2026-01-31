import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conectarDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.error("❌ ERROR: MONGO_URI no está definido en el archivo .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err.message);
    process.exit(1);
  }
};

export default conectarDB;
