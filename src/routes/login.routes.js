import { Router } from "express";
import { methods as usersController } from "./../controllers/login.controller";

const router = Router();
router.post("/", usersController.login);


export default router;
