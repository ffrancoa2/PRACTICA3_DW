##Crear un servidor con Node.js y Express, conectar con una base de datos PostgreSQL y exponer un API REST básica para la gestión de usuarios.

Sesión 1 (1 hora) – Servidor básico con Express

Crear proyecto con:

npm init -y


Instalar dependencias:

npm install express cors pg


Configurar servidor en server.js con un endpoint simple GET / que responda un mensaje básico.

Ejecutar servidor y probar en navegador o Postman:

http://localhost:3000

Sesión 2 (1 hora) – Base de datos en PostgreSQL

Crear base de datos:

CREATE DATABASE usuarios_db;


Crear tabla usuarios:

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  correo VARCHAR(100),
  contraseña VARCHAR(100)
);


Configurar conexión a PostgreSQL en archivo db.js usando pg.Pool con variables de entorno para host, usuario, contraseña, puerto y base de datos.

Probar la conexión ejecutando una consulta simple, por ejemplo:

SELECT * FROM usuarios;

Sesión 3 (1 hora) – API REST CRUD

Crear los siguientes endpoints en Express:

POST /usuarios: registrar un usuario nuevo.

GET /usuarios: listar todos los usuarios.

PUT /usuarios/:id: actualizar usuario por id.

DELETE /usuarios/:id: eliminar usuario por id.

Usar middleware express.json() para poder recibir datos JSON en el cuerpo de las solicitudes POST y PUT.

Probar estos endpoints con Postman o alguna herramienta similar enviando y recibiendo datos JSON.

Consideraciones finales

Configurar variables de entorno en un archivo .env para datos sensibles (usuario, contraseña, puerto, base de datos).

Reiniciar servidor después de realizar cambios para que tengan efecto.

El proyecto puede extenderse para añadir validaciones, manejo de errores más robusto, autenticación y seguridad.
