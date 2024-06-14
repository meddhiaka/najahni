import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const { email, name, description }: { email: string, name: string, description: string } = body

    const updatedUser = await prisma.user.update(
        {
            where: {
                email: email
            },
            data: {
                name: name,
                description: description
            }
        }
    )

    const user = await prisma.user.findUnique(
        {
            where: {
                email: email
            },
            select: {
                email: true,
                name: true,
                description: true,
                role: true
            }
        }
    )


    return NextResponse.json(
        {
            user
        })
}