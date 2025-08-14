import { Router } from "express";
import { serverCheck } from "../controllers/serverCheck.js";

const router=Router()

router.route("/").get(serverCheck)
router.route("/test").get(serverCheck)

export default router