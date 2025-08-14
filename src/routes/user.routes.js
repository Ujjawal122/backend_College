import { Router } from "express";
import { login,register } from "../controllers/user.controller.js";

const router=Router()

router.route("/users/register").post(register)
router.route("/users/login").post(login)

export default router   