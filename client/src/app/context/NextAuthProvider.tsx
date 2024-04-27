"use client";
import { SessionProvider, useSession } from "next-auth/react";

export function NextAuthProvider(
    { children }: { children: React.ReactNode }
) {
    
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}