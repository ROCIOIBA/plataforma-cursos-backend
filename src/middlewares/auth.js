
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // ← LEER TOKEN DESDE LA COOKIE

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.usuarioId = decoded.id; // ← GUARDAR ID DEL USUARIO

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};
