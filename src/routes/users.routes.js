import { Router } from "express";
import { methods as usersController } from "./../controllers/users.controller";

const router = Router();

// Get the list of users
router.get("/", usersController.getUserList);

// Get a specific user by ID
router.get("/:id", usersController.getUser);

// Create a new user
router.post("/", usersController.newUser);

// Update an existing user by ID
router.put("/:id", usersController.updateUser);

// Delete a user by ID
router.delete("/:id", usersController.deleteUser);

export default router;
