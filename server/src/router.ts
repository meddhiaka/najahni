import { Router } from "express";
import { createUser } from "./handlers/create";
import { loginUser } from "./handlers/auth";

const router: Router = Router()

router.post("/signin", loginUser)
router.post("/signup", createUser)
router.post('/',)

export default router