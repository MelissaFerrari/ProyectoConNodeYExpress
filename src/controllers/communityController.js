// controllers/communityController.js
const Comunidad = require("../models/Community");

// Obtener todas las comunidades
exports.getAllComunidades = async (req, res) => {
  try {
    const comunidades = await Comunidad.findAll();
    res.json(comunidades);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener comunidades",
      detalle: error.message,
    });
  }
};

// Obtener comunidad por ID
exports.getComunidadById = async (req, res) => {
  try {
    const comunidad = await Comunidad.findByPk(req.params.id);

    if (!comunidad) {
      return res.status(404).json({ error: "Comunidad no encontrada" });
    }

    res.json(comunidad);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener comunidad",
      detalle: error.message,
    });
  }
};

// Crear comunidad
exports.createComunidad = async (req, res) => {
  try {
    const { nombre, descripcion, creador_id } = req.body;

    const nuevaComunidad = await Comunidad.create({
      nombre,
      descripcion,
      creador_id,
    });

    res.status(201).json(nuevaComunidad);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear comunidad",
      detalle: error.message,
    });
  }
};

// Actualizar comunidad
exports.updateComunidad = async (req, res) => {
  try {
    const comunidad = await Comunidad.findByPk(req.params.id);

    if (!comunidad) {
      return res.status(404).json({ error: "Comunidad no encontrada" });
    }

    await comunidad.update(req.body);

    res.json(comunidad);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar comunidad",
      detalle: error.message,
    });
  }
};

// Eliminar comunidad
exports.deleteComunidad = async (req, res) => {
  try {
    const comunidad = await Comunidad.findByPk(req.params.id);

    if (!comunidad) {
      return res.status(404).json({ error: "Comunidad no encontrada" });
    }

    await comunidad.destroy();

    res.json({ mensaje: "Comunidad eliminada correctamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar comunidad",
      detalle: error.message,
    });
  }
};
