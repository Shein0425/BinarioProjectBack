import { Router } from "express";
import { methods as loginController } from "./../controllers/login.controller";

const router = Router();

// Endpoint for user login
router.post("/", loginController.login);

export default router;
