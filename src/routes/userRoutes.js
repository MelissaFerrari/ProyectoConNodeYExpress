const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

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
router.put('/:id', auth, updateUsuario);
router.delete('/:id', auth, deleteUsuario);

module.exports = router;
