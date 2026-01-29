import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  console.log("Authorization header recibido:");
  
    const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    console.log("❌ No llegó token al backend");
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decodificado:", decoded);
    
    req.usuarioId = decoded.id; // Guardamos el ID del usuario
    next();
  } catch (error) {
console.log("❌ Error verificando token:", error.message);

    return res.status(401).json({ message: "Token inválido" });
  }
};
