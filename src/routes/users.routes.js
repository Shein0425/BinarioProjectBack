import { Router } from "express";
import { methods as usersController } from "./../controllers/users.controller";

const router = Router();

router.get("/", usersController.getUserList);
router.get("/:id", usersController.getUser);
router.post("/", usersController.newUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;
