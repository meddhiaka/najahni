import { decryptPassword } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const { email, password }: { email: string, password: string } = body
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                password: true
            }
        })
        if (user) {
            const res = await decryptPassword(password, user.password)
            if (res) {
                return NextResponse.json({ user }, { status: 200 })
            } else {
                return NextResponse.json({ message: "ghalet" }, { status: 401 })
            }
        }
        return NextResponse.json(
            {
                user
            },
            { status: 200 }
        )
    } catch (e) {

    }
}