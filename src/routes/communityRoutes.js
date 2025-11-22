// routes/communityRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllComunidades,
  getComunidadById,
  createComunidad,
  updateComunidad,
  deleteComunidad,
} = require("../controllers/communityController");

// Rutas CRUD
router.get("/", getAllComunidades);
router.get("/:id", getComunidadById);
router.post("/", createComunidad);
router.put("/:id", updateComunidad);
router.delete("/:id", deleteComunidad);

module.exports = router;

