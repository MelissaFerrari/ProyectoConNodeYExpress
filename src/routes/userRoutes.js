import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Rutas CRUD
router.get('/', getAllUsers);       // GET /users
router.get('/:id', getUserById);    // GET /users/:id
router.post('/', createUser);       // POST /users
router.put('/:id', updateUser);     // PUT /users/:id
router.delete('/:id', deleteUser);  // DELETE /users/:id

export default router;
