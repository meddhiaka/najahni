import { Router } from "express";
import { createUser } from "./handlers/create";
import { loginUser } from "./handlers/auth";
import { getUser } from "./handlers/user";
import { createDemoUser } from "./handlers/demoUser";

const router: Router = Router()

router.post("/signin", loginUser)
router.post("/signup", createUser)
router.post("/user", getUser)
router.post("/oauth", createDemoUser)

export default router