import { hashPassword } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    return NextResponse.json({
        message: "user/signup/GET()"
    })
}

export async function POST(req: Response) {
    const body = await req.json()
    const { name, email, password, role }: { name: string, email: string, password: string, role: string } = body
    try {
        const hashedP = await hashPassword(password)
        const user = await prisma.user.create(
            {
                data: {
                    ...body,
                    emailVerified: false,
                    password: hashedP,
                    role: role
                }
            }
        )
        return NextResponse.json(
            {
                user
            },
            {
                status: 201
            }
        )
    } catch (e) {
        console.log(e)
    }
}