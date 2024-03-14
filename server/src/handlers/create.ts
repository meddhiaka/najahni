import { NextFunction, Request, Response } from "express"
import validator from 'validator'
import { prisma } from './../lib/prisma'
import bcrypt from 'bcrypt'
import { randomInt } from "crypto"

async function hashPassword(str: string): Promise<string> {
    const salt: string = await bcrypt.genSalt(2)
    const hashedPassword: string = await bcrypt.hash(str, salt)
    return hashedPassword
}

async function createUser(req: Request, res: Response): Promise<any> {
    const { name, email, password }: { name: string, email: string, password: string } = req.body

    try {

        if (!validator.isEmail(email)) return res.status(400).json({ msg: "respect e-mail format" })
        if (!validator.isAlphanumeric(name)) return res.status(400).json({ msg: "respect name format" })
        if (!validator.isAlphanumeric(password)) return res.status(400).json({ msg: "respect password format" })

        const hashedP = await hashPassword(req.body.password)

        const user = await prisma.user.create({
            data: { ...req.body, password: hashedP }
        })
        return res.status(201).json({ user })
    } catch (e) {
        console.error("src/handlers/create.ts:\n", e)
    }
}

export {
    hashPassword, createUser
}