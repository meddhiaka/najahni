"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export function NextAuthProvider(
    { children }: { children: React.ReactNode }
) {

    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}