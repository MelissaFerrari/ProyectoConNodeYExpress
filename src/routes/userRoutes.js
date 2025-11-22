const express = require('express');
const router = express.Router();

const {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
} = require('../controllers/userController');

// Rutas CRUD
router.get('/', getAllUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;
