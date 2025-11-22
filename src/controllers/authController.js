// controllers/authController.js
const Usuario = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Registrar usuario
exports.register = async (req, res) => {
  try {
    const { nombre_usuario, email, password } = req.body;

    // Validar campos mínimos
    if (!nombre_usuario || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // ¿Email ya existe?
    const emailExistente = await Usuario.findOne({ where: { email } });
    if (emailExistente) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    // ¿Nombre usuario ya existe?
    const userExistente = await Usuario.findOne({ where: { nombre_usuario } });
    if (userExistente) {
      return res.status(400).json({ error: "El nombre de usuario ya existe" });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: {
        id: nuevoUsuario.id,
        nombre_usuario: nuevoUsuario.nombre_usuario,
        email: nuevoUsuario.email
      }
    });

  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario", detalle: error.message });
  }
};

// Login de usuario
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validación
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña obligatorios" });
    }

    // ¿Existe el usuario?
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }

    // Comparar contraseñas
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }

    // Generar token
    const token = jwt.sign(
      {
        id: usuario.id,
        nombre_usuario: usuario.nombre_usuario,
        email: usuario.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: usuario.id,
        nombre_usuario: usuario.nombre_usuario,
        email: usuario.email
      }
    });

  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión", detalle: error.message });
  }
};

