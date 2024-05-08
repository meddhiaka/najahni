import { Router } from "express";
import { createUser } from "./handlers/create";
import { loginUser } from "./handlers/auth";
import { getUser } from "./handlers/user";
import { createDemoUser } from "./handlers/demoUser";
import { uploadImage } from "./handlers/upload";

const router: Router = Router()

router.post("/signin", loginUser)
router.post("/signup", createUser)
router.post("/user", getUser)
router.post("/oauth", createDemoUser)
router.post("/upload", uploadImage.single('pdp'), async (req, res) => {
    res.json({ message: "image is uploaded" })
})

export default router