import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const { email, password }: { email: string, password: string } = body
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
        return NextResponse.json(
            {
                user
            },
            { status: 200 }
        )
    } catch (e) {

    }
}