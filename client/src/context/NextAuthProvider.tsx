"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export  function NextAuthProvider(
    { children }: { children: React.ReactNode }
) {
    const [sessionObject, setSessionObject] = useState(null)
    useEffect(() => {
        async function fetchSession() {
            const { session } = useSession()
            setSessionObject(session)
            console.log(sessionObject)
        }

        fetchSession()

    }, [])
    return (
        <SessionProvider value={{sessionObject}}>
            {children}
        </SessionProvider>
    )
}


export default function ConsumeSession() {

}