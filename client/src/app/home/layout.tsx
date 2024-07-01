'use server'

import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { sendHello } from "@/lib/email";
import Link from "next/link";
import { DropdownMenuDemo } from "@/components/DropMenuEx";

export async function getSessionCustom() {
    const response = await getServerSession(authOptions)
    return response
}

export async function getProfileData(email: string) {
    const res = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            role: true,
            id: true,
            newAccount: true,
            email: true,
            name: true
        }
    })
    return res
}
export default async function HomeLayout({ children }: { children: React.ReactNode }) {
    const session = await getSessionCustom()
    let e, userData

    if (session && session.user && session.user.email) { e = session?.user?.email }
    if (e) {
        userData = await getProfileData(e)
    }

    if(userData?.newAccount == true) {
        await sendHello(userData.email)
    }



    return (
        <div>
            <div className="m-2 flex justify-between">
                <div className="grid grid-cols-5 md:w-[500px]">
                    <div className="col-span-1 m-auto  font-base text-3xl bg-gradient-to-r from-zinc-500 to-amber-500 bg-clip-text text-transparent">
                    <Link prefetch={true} href={"/home"}>NAJAHNI</Link>
                    </div>
                </div>
                {
                    session && (
                        <DropdownMenuDemo role={userData?.role} name={userData?.name} email={userData?.email} id={userData?.id} />
                    )
                }
            </div>
            {children}

        </div>
    )
}