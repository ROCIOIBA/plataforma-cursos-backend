📘 Plataforma de Cursos – Backend

API RESTful desarrollada por Rocío Ibañez, Backend Developer.
Este backend gestiona usuarios, cursos y autenticación para la Plataforma de Cursos. Está construido con Node.js, Express y MongoDB, siguiendo buenas prácticas de arquitectura, modularización y seguridad.

🚀 Tecnologías utilizadas

Node.js

Express

MongoDB + Mongoose

bcrypt (hash de contraseñas)

dotenv (variables de entorno)

CORS

Nodemon (entorno de desarrollo)

📦 Instalación y ejecución

1. Clonar el repositorio
bash
git clone https://github.com/ROCIOIBA/plataforma-cursos-backend.git

2. Instalar dependencias
bash
npm install

3. Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto:

Código
PORT=3000
MONGODB_URI=tu_conexion_de_mongodb_atlas
JWT_SECRET=un_secret_seguro

4. Ejecutar el servidor

bash
npm run dev
El backend estará disponible en:

Código
http://localhost:3000

🧩 Funcionalidades principales

Usuarios

Registro

Login

Hasheo de contraseñas

Validaciones

CRUD completo

Cursos

Crear curso

Listar cursos

Obtener curso por ID

Actualizar curso

Eliminar curso

Seguridad

Contraseñas encriptadas con bcrypt

Validación de datos

Manejo de errores

CORS configurado

📁 Estructura del proyecto

bash
src/
  config/            # Conexión a MongoDB y configuración general
  controllers/       # Lógica de cada entidad (usuarios, cursos)
  models/            # Modelos de Mongoose
  routes/            # Rutas organizadas por entidad
  middlewares/       # Validaciones, auth, etc.
  server.js          # Punto de entrada del servidor

🔗 Endpoints principales

Usuarios (/usuarios)
GET /

GET /:id

POST /

PUT /:id

DELETE /:id

Cursos (/cursos)

GET /

GET /:id

POST /

PUT /:id

DELETE /:id



🧪 Pruebas con Postman
Incluye:

CRUD de usuarios

CRUD de cursos

Login

Validaciones

Casos de error



🌐 Deploy
(Se completa cuando hagamos el deploy en Render.)

Ejemplo:

Código
https://plataforma-cursos-backend.onrender.com




👩‍💻 Autora
Desarrollado por: Rocío Ibañez