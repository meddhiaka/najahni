'use client'
import { prisma } from "@/lib/prisma"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { AlertDestructive } from "@/components/AlertEx"
import { DialogDemo } from "@/components/EditProfileEx"

function getId(a: string): string {
    const tab = a.split("/")
    const res: string = tab[tab.length - 1]
    return res
}

export default function Profile({ params }: { params: { slug: string } }) {
    return (
        <div className="max-w-5xl mx-auto px-4 space-y-7">
            <div className="flex space-x-2">
                <h1 className="text-4xl font-semibold">Profile</h1>
                <DialogDemo />
            </div>
            <div className="max-w-md">
                <AlertDestructive />
            </div>
        </div>
    )
}