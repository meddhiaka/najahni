import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        
        const id = params.id;
        const Course = await prisma.cour.findUnique({
            where: {
                id
            }
        })
        
        const userId = Course?.userId
        
        const User = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        return NextResponse.json({ Course, User }, { status: 200 });
        
    } catch (e) {
        console.log(e)
    }
}