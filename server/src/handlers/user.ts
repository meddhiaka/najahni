import { prisma } from "../lib/prisma";
import { Request, Response } from "express";
import validator from "validator"

interface uniqueUser {
    id: string
    email: string
    name: string
}


async function findUser(email: string): Promise<uniqueUser> {
    const user: uniqueUser = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            email: true,
            name: true,
            emailVerified: true,
            role: true
        }
    })
    return user
}

async function getUser(req: Request, res: Response) {

    const email: string = req.body.email

    if (!validator.isEmail(email)) return res.status(404).json({ msg: "should be an adress" })

    const user: uniqueUser = await findUser(email)

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json(null)
    }

}

export {
    getUser,
    findUser
}