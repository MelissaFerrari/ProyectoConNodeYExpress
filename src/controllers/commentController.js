// controllers/commentController.js
const Comentario = require("../models/Comment");

// Obtener todos los comentarios
exports.getAllComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll();
    res.json(comentarios);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener comentarios", detalle: error.message });
  }
};

// Obtener un comentario por ID
exports.getComentarioById = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);

    if (!comentario) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    res.json(comentario);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener comentario", detalle: error.message });
  }
};

// Crear comentario
exports.createComentario = async (req, res) => {
  try {
    const { contenido, usuario_id, publicacion_id } = req.body;

    const nuevoComentario = await Comentario.create({
      contenido,
      usuario_id,
      publicacion_id,
    });

    res.status(201).json(nuevoComentario);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear comentario", detalle: error.message });
  }
};

// Actualizar comentario
exports.updateComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);

    if (!comentario) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    await comentario.update(req.body);

    res.json(comentario);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al actualizar comentario", detalle: error.message });
  }
};

// Eliminar comentario
exports.deleteComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);

    if (!comentario) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    await comentario.destroy();

    res.json({ mensaje: "Comentario eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al eliminar comentario", detalle: error.message });
  }
};

