import { prisma } from "../lib/prisma"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import validator from "validator"

async function decryptPassword(password: string, cryptedPassword: string): Promise<boolean> {
    const b: boolean = await bcrypt.compare(password, cryptedPassword);
    return b
}

async function loginUser(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body
    // if (validator.isAlphanumeric(email) || validator.isAlphanumeric(password)) return res.status(400).json({ msg: "invalid input" })

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
            await decryptPassword(password, user.password) ? res.status(200).json(user) : res.status(401).json({ msg: "matnajemech!" })
        }
    } catch (e) {
        console.error("src/handlers/auth.ts:\n", e)
    }
}

export {
    loginUser
}