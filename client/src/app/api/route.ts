import { NextResponse } from "next/server";

export async function GET(res: Response) {
    return NextResponse.json({
        message: "hello world"
    })
}