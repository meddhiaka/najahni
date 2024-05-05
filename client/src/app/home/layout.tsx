'use server'

import React from "react";
import { DropdownMenuDemo } from "@/components/DropMenuEx"
import { TabsDemo } from "@/components/TabsEx"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { sendHello } from "@/lib/email";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { SessionProvider } from "next-auth/react";


async function getSessionCustom() {
    const response = await getServerSession(authOptions)
    return response
}

async function getProfileData(email: string) {
    const res = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            role: true,
            id: true,
            newAccount: true,
            email: true
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
    if (userData?.newAccount === true && userData.email !== null) {
        await sendHello(userData.email)
    }



    return (
        <div>
            <div className="m-2 flex justify-between">
                <div className="grid grid-cols-5 md:w-[500px]">
                    <div className="col-span-1 m-auto">
                        Najahni
                    </div>
                    <div className="col-span-4">
                        <TabsDemo />
                    </div>
                </div>
                {
                    session && (
                        <DropdownMenuDemo name={session.user?.name} email={session.user?.email} role={userData?.role} id={userData?.id} />
                    )
                }
            </div>
                {children}
        </div>
    )
}