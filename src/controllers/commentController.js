import { Comment } from '../models/Comment.js';

// Obtener todos los comentarios
export const getAllComments = async (req, res) => {
  try {
    const comentarios = await Comment.findAll();
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los comentarios' });
  }
};

// Obtener un comentario por ID
export const getCommentById = async (req, res) => {
  try {
    const comentario = await Comment.findByPk(req.params.id);
    if (!comentario) return res.status(404).json({ error: 'Comentario no encontrado' });
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el comentario' });
  }
};

// Crear un nuevo comentario
export const createComment = async (req, res) => {
  try {
    const nuevoComentario = await Comment.create(req.body);
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el comentario' });
  }
};

// Actualizar un comentario
export const updateComment = async (req, res) => {
  try {
    const comentario = await Comment.findByPk(req.params.id);
    if (!comentario) return res.status(404).json({ error: 'Comentario no encontrado' });
    await comentario.update(req.body);
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el comentario' });
  }
};

// Eliminar un comentario
export const deleteComment = async (req, res) => {
  try {
    const comentario = await Comment.findByPk(req.params.id);
    if (!comentario) return res.status(404).json({ error: 'Comentario no encontrado' });
    await comentario.destroy();
    res.json({ mensaje: 'Comentario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el comentario' });
  }
};

