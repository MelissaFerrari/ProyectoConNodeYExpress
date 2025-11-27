// routes/commentRoutes.js
const express = require("express");
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const {
  getAllComentarios,
  getComentarioById,
  createComentario,
  updateComentario,
  deleteComentario,
} = require("../controllers/commentController");

// Rutas CRUD
router.get("/", getAllComentarios);
router.get("/:id", getComentarioById);
router.post("/", auth, createComentario);
router.put("/:id", auth, updateComentario);
router.delete("/:id", auth, deleteComentario);

module.exports = router;
