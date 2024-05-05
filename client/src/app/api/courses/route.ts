import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, subjectDescription, fileUrl, section, id } = await req.json()

    const newCourse = await prisma.cour.create({
        data: {
            name: name,
            section: section,
            description: subjectDescription,
            fileUrl: fileUrl,
            owner: { connect: { id: id } }
        }
    })
    return NextResponse.json({
        newCourse
    }, {
        status: 201
    })
}