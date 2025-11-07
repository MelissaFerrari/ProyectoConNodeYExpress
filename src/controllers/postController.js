import { Post } from '../models/Post.js';

// Obtener todas las publicaciones
export const getAllPosts = async (req, res) => {
  try {
    const publicaciones = await Post.findAll();
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las publicaciones' });
  }
};

// Obtener una publicación por ID
export const getPostById = async (req, res) => {
  try {
    const publicacion = await Post.findByPk(req.params.id);
    if (!publicacion) return res.status(404).json({ error: 'Publicación no encontrada' });
    res.json(publicacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la publicación' });
  }
};

// Crear una nueva publicación
export const createPost = async (req, res) => {
  try {
    const nuevaPublicacion = await Post.create(req.body);
    res.status(201).json(nuevaPublicacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la publicación' });
  }
};

// Actualizar una publicación
export const updatePost = async (req, res) => {
  try {
    const publicacion = await Post.findByPk(req.params.id);
    if (!publicacion) return res.status(404).json({ error: 'Publicación no encontrada' });
    await publicacion.update(req.body);
    res.json(publicacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la publicación' });
  }
};

// Eliminar una publicación
export const deletePost = async (req, res) => {
  try {
    const publicacion = await Post.findByPk(req.params.id);
    if (!publicacion) return res.status(404).json({ error: 'Publicación no encontrada' });
    await publicacion.destroy();
    res.json({ mensaje: 'Publicación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la publicación' });
  }
};
