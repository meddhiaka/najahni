import { prisma } from "../lib/prisma"
import { hashPassword } from "./create"
import { Request, Response } from "express"
import validator from "validator"

async function loginUser(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body
    if (validator.isAlphanumeric(email) || validator.isAlphanumeric(password)) return res.status(400).json({ msg: "invalid input" })

    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: {
                id: true,
                name: true,
                password: true,
                email: true,
                image: true
            }
        })
        if (user) {
            const testPass: string = await hashPassword(password)
            if (user.password === testPass) return res.status(200).json({ user })
        }
    } catch (e) {
        console.error("src/handlers/auth.ts:\n", e)
    }
}

export {
    loginUser
}