const express = require('express');
const router = express.Router();
const {
  getAllComunidades,
  getComunidadById,
  createComunidad,
  updateComunidad,
  deleteComunidad
} = require('../controllers/comunidades.controller');

// Rutas CRUD
router.get('/', getAllComunidades);
router.get('/:id', getComunidadById);
router.post('/', createComunidad);
router.put('/:id', updateComunidad);
router.delete('/:id', deleteComunidad);

module.exports = router;
