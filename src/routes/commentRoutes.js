// routes/commentRoutes.js
const express = require("express");
const router = express.Router();

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
router.post("/", createComentario);
router.put("/:id", updateComentario);
router.delete("/:id", deleteComentario);

module.exports = router;
