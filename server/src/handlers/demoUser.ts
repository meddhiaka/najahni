import { Request, Response } from "express";
import validator from "validator"
import { prisma } from "../lib/prisma";
import { findUser } from "./user";


async function createDemoUser(req: Request, res: Response) {
    const { name, email }: { name: string, email: string } = req.body

    try {

        // if (!validator.isEmail(email)) return res.status(400).json({ msg: "respect e-mail format" })
        // if (!validator.isAlphanumeric(name)) return res.status(400).json({ msg: "respect name format" })
        const userExist = await findUser(email);
        console.log(userExist)
        if (userExist == null) {
            const user = await prisma.user.create({
                data: { ...req.body, emailVerified: true }
            })
            console.log(user)
            return res.status(201).json({ user })
        } else {
            res.status(404).json(null)
        }
    } catch (e) {
        console.error("src/handlers/demoUser.ts:\n", e)
    }
}

export {
    createDemoUser
}