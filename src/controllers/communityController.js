import { Community } from '../models/Community.js';

// Obtener todas las comunidades
export const getAllCommunities = async (req, res) => {
  try {
    const comunidades = await Community.findAll();
    res.json(comunidades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las comunidades' });
  }
};

// Obtener una comunidad por ID
export const getCommunityById = async (req, res) => {
  try {
    const comunidad = await Community.findByPk(req.params.id);
    if (!comunidad) return res.status(404).json({ error: 'Comunidad no encontrada' });
    res.json(comunidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la comunidad' });
  }
};

// Crear una nueva comunidad
export const createCommunity = async (req, res) => {
  try {
    const nuevaComunidad = await Community.create(req.body);
    res.status(201).json(nuevaComunidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la comunidad' });
  }
};

// Actualizar una comunidad
export const updateCommunity = async (req, res) => {
  try {
    const comunidad = await Community.findByPk(req.params.id);
    if (!comunidad) return res.status(404).json({ error: 'Comunidad no encontrada' });
    await comunidad.update(req.body);
    res.json(comunidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la comunidad' });
  }
};

// Eliminar una comunidad
export const deleteCommunity = async (req, res) => {
  try {
    const comunidad = await Community.findByPk(req.params.id);
    if (!comunidad) return res.status(404).json({ error: 'Comunidad no encontrada' });
    await comunidad.destroy();
    res.json({ mensaje: 'Comunidad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la comunidad' });
  }
};
