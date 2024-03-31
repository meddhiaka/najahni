'use client'
import React from "react";
import { DropdownMenuDemo } from "@/components/DropMenuEx"
import { TabsDemo } from "@/components/TabsEx"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const session = useSession()

    session.status === "unauthenticated" ? redirect('/') : console.log('')
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
                <DropdownMenuDemo name={session.data?.user?.name} email={session.data?.user?.email} signOut={signOut} />
            </div>
            {children}
        </div>
    )
}