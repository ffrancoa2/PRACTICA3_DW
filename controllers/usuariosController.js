import * as usuarioModel from '../models/usuarioModel.js';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.obtenerUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postUsuario = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  try {
    const usuario = await usuarioModel.crearUsuario(nombre, correo, contrasena);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const putUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contrasena } = req.body;
  try {
    const usuario = await usuarioModel.actualizarUsuario(id, nombre, correo, contrasena);
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await usuarioModel.eliminarUsuario(id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
