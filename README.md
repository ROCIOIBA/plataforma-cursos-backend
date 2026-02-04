📘 Plataforma de Cursos – Backend
API RESTful desarrollada por Rocío Ibañez, Backend Developer.

Este backend gestiona usuarios, cursos e inscripciones, incluyendo autenticación, seguridad y CRUD completo.
Forma parte de una plataforma educativa moderna, escalable y lista para producción.

🚀 Tecnologías utilizadas
Node.js

Express

MongoDB + Mongoose

bcrypt (hash de contraseñas)

dotenv (variables de entorno)

CORS

Nodemon (desarrollo)

📦 Instalación y ejecución
1. Clonar el repositorio
bash
git clone https://github.com/ROCIOIBA/plataforma-cursos-backend.git
2. Instalar dependencias
bash
npm install
3. Configurar variables de entorno
Crear un archivo .env en la raíz:

Código
PORT=3000
MONGODB_URI=tu_conexion_de_mongodb_atlas
JWT_SECRET=un_secret_seguro
4. Ejecutar el servidor
bash
npm run dev
Servidor local:

Código
http://localhost:3000
🧩 Funcionalidades principales
👤 Usuarios
Registro

Login

Logout

Perfil

Contraseñas hasheadas

Validaciones

CRUD completo

📚 Cursos
Crear curso

Listar cursos

Obtener curso por ID

Actualizar curso

Eliminar curso

📝 Inscripciones
Inscribirse a un curso

Listar cursos del usuario

🔐 Seguridad
Contraseñas encriptadas con bcrypt

Validación de datos

Manejo de errores

Cookies seguras (httpOnly)

CORS configurado

📁 Estructura del proyecto
Código
src/
  config/            # Conexión a MongoDB
  controllers/       # Lógica de usuarios, cursos, inscripciones
  models/            # Modelos de Mongoose
  routes/            # Rutas organizadas por entidad
  middlewares/       # Auth, validaciones, etc.
  server.js          # Punto de entrada

🔗 Endpoints principales

Usuarios (/usuarios)
Método	Ruta	Descripción

GET	/	Listar usuarios
GET	/:id	Obtener usuario
POST	/register	Registrar
POST	/login	Iniciar sesión
GET	/perfil	Perfil del usuario (protegido)
POST	/logout	Cerrar sesión
PUT	/:id	Actualizar
DELETE	/:id	Eliminar

Cursos (/cursos)
Método	Ruta	Descripción

GET	/	Listar cursos
GET	/:id	Obtener curso
POST	/	Crear curso
PUT	/:id	Actualizar
DELETE	/:id	Eliminar

Inscripciones (/inscripciones)
Método	Ruta	Descripción

POST	/:id	Inscribirse a un curso
GET	/mis-cursos	Listar cursos del usuario
🧪 Pruebas con Postman

Incluye:

CRUD de usuarios

CRUD de cursos

Login

Inscripciones

Validaciones

Casos de error

La colección está disponible en el repositorio.

🌐 Deploy
Backend desplegado en Render:

https://plataforma-cursos-backend-4o3v.onrender.com

👩‍💻 Autora
Desarrollado por Rocío Ibañez  
Backend Developer

