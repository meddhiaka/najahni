import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id
    const user = prisma.user.findFirst({
        where: {
            id
        }
    })
    return NextResponse.json(
        { user }, { status: 200 }
    )
}