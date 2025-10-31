// models/usuarioModel.js
import pool from './db.js';

export const obtenerUsuarios = async () => {
  const result = await pool.query('SELECT * FROM usuarios');
  return result.rows;
};

export const crearUsuario = async (nombre, correo, contrasena) => {
  const result = await pool.query(
    'INSERT INTO usuarios (nombre, correo, contrasena) VALUES ($1, $2, $3) RETURNING *',
    [nombre, correo, contrasena]
  );
  return result.rows[0];
};

export const actualizarUsuario = async (id, nombre, correo, contrasena) => {
  const result = await pool.query(
    'UPDATE usuarios SET nombre=$1, correo=$2, contrasena=$3 WHERE id=$4 RETURNING *',
    [nombre, correo, contrasena, id]
  );
  return result.rows[0];
};

export const eliminarUsuario = async (id) => {
  await pool.query('DELETE FROM usuarios WHERE id=$1', [id]);
};
