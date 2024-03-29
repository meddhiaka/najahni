'use client'
import CredentialsTesting from "@/components/CredentialsTesting"
import { DropdownMenuDemo } from "@/components/DropMenuEx"
import { TabsDemo } from "@/components/TabsEx"
import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

function Home() {
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
    </div>
  )
}

export default Home