const Publicacion = require('../models/Post');

// Obtener todas las publicaciones
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Publicacion.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener publicaciones', detalle: error.message });
  }
};

// Obtener publicación por ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Publicacion.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Publicación no encontrada' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener publicación', detalle: error.message });
  }
};

// Crear nueva publicación
exports.createPost = async (req, res) => {
  try {
    const { contenido, usuario_id, comunidad_id } = req.body;

    const nuevaPost = await Publicacion.create({
      contenido,
      usuario_id,
      comunidad_id
    });

    res.status(201).json(nuevaPost);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear publicación', detalle: error.message });
  }
};

// Actualizar publicación
exports.updatePost = async (req, res) => {
  try {
    const post = await Publicacion.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Publicación no encontrada' });
    }

    await post.update(req.body);

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar publicación', detalle: error.message });
  }
};

// Eliminar publicación
exports.deletePost = async (req, res) => {
  try {
    const post = await Publicacion.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Publicación no encontrada' });
    }

// Validación de ownership
    if (post.usuario_id !== req.user.id) {
      return res.status(403).json({ error: "No autorizado" });
    }

    await post.destroy();

    res.json({ mensaje: 'Publicación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar publicación', detalle: error.message });
  }
};
