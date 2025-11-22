const Usuario = require('../models/User');

// Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios', detalle: error.message });
  }
};

// Obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario', detalle: error.message });
  }
};

// Crear usuario
exports.createUsuario = async (req, res) => {
  try {
    const { nombre_usuario, email, password } = req.body;

    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario', detalle: error.message });
  }
};

// Actualizar usuario
exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await usuario.update(req.body);

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario', detalle: error.message });
  }
};

// Eliminar usuario
exports.deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await usuario.destroy();

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario', detalle: error.message });
  }
};
