// routes/communityRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getComunidadFull } = require("../controllers/communityController");


const {
  getAllComunidades,
  getComunidadById,
  createComunidad,
  updateComunidad,
  deleteComunidad,
} = require("../controllers/communityController");

// Rutas públicas
router.get("/", getAllComunidades);
router.get("/:id/full", getComunidadFull);
router.get("/:id", getComunidadById);


// Rutas protegidas con JWT
router.post("/", authMiddleware, createComunidad);
router.put("/:id", authMiddleware, updateComunidad);
router.delete("/:id", authMiddleware, deleteComunidad);


module.exports = router;
