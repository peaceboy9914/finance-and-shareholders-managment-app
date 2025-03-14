import { Router } from "express";
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from "../controllers/userController.js";
import { createUserValidation, updateUserValidation } from "../middleware/userMiddleware.js";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUser);
userRoutes.post('/', createUserValidation ,createUser);
userRoutes.put('/:id', updateUserValidation ,updateUser);
userRoutes.delete('/:id', deleteUser);


export default userRoutes;