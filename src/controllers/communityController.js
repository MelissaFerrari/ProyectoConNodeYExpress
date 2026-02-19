// controllers/communityController.js
const Comunidad = require("../models/Community");
const Publicacion = require("../models/Post");
const Comentario = require("../models/Comment");
const Usuario = require("../models/User");



// Obtener todas las comunidades (público)
exports.getAllComunidades = async (req, res) => {
  try {
    const comunidades = await Comunidad.findAll();
    res.json(comunidades);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener comunidades", detalle: error.message });
  }
};

exports.getComunidadFull = async (req, res) => {
  const { id } = req.params;

  try {
    const comunidad = await Comunidad.findByPk(id, {
      include: [
        {
          model: Publicacion,
          as: "publicaciones",
          include: [
            {
              model: Usuario,
              as: "usuario",
              attributes: ["id", "nombre_usuario"],
            },
            {
              model: Comentario,
              as: "comentarios",
              include: [
                {
                  model: Usuario,
                  as: "usuario",
                  attributes: ["id", "nombre_usuario"],
                },
              ],
            },
          ],
        },
      ],
    });

    if (!comunidad) {
      return res.status(404).json({ message: "Comunidad no encontrada" });
    }
        res.json(comunidad);
  } catch (error) {
    console.error("Error en getComunidadFull:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Obtener comunidad por ID (público)
exports.getComunidadById = async (req, res) => {
  try {
    const comunidad = await Comunidad.findByPk(req.params.id);

    if (!comunidad) {
      return res.status(404).json({ error: "Comunidad no encontrada" });
    }

    res.json(comunidad);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener comunidad", detalle: error.message });
  }
};

// Crear comunidad (protegido)
exports.createComunidad = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    const nuevaComunidad = await Comunidad.create({
      nombre,
      descripcion,
      creador_id: req.user.id, // Tomamos ID del usuario autenticado
    });

    res.status(201).json(nuevaComunidad);
  } catch (error) {
    res.status(500).json({ error: "Error al crear comunidad", detalle: error.message });
  }
};

// Actualizar comunidad (solo creador)
exports.updateComunidad = async (req, res) => {
  try {
    const comunidad = await Comunidad.findByPk(req.params.id);

    if (!comunidad) return res.status(404).json({ error: "Comunidad no encontrada" });

    if (comunidad.creador_id !== req.user.id) {
      return res.status(403).json({ error: "No autorizado para actualizar esta comunidad" });
    }

    await comunidad.update(req.body);
    res.json(comunidad);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar comunidad", detalle: error.message });
  }
};

// Eliminar comunidad (solo creador)
exports.deleteComunidad = async (req, res) => {
  try {
    const comunidad = await Comunidad.findByPk(req.params.id);

    if (!comunidad) return res.status(404).json({ error: "Comunidad no encontrada" });

    if (comunidad.creador_id !== req.user.id) {
      return res.status(403).json({ error: "No autorizado para eliminar esta comunidad" });
    }

    await comunidad.destroy();
    res.json({ mensaje: "Comunidad eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar comunidad", detalle: error.message });
  }
};
