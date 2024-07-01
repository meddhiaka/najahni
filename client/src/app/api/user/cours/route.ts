import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// method to add a course in a user profile with student role
export async function POST(req: NextRequest) {
    const body = await req.json()
    return NextResponse.json(
        { body }, { status: 200 }
    )
}