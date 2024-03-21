'use client'
import Landing from "@/components/Landing";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function RealHomePage() {
  const session = useSession()

  session.status === "authenticated" ? redirect('/home') : console.log('')

  return (
    <main>
      <Landing />
    </main>
  );
}
