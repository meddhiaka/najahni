'use client'
import {
  Cloud,
  LogOut,
  Settings,
  User,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AvatarDemo } from "./AvatarEx"
import { BadgeDemo } from "./BadgeEx"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

type StringTypo = string | null | undefined

export function DropdownMenuDemo({ name, email, role, id }: {
  name: StringTypo, email: StringTypo, role: StringTypo, id: StringTypo
}) {
  const r: AppRouterInstance = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none focus:outline-none focus:border-none border-none border-white">
          <AvatarDemo />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="grid grid-cols-9 my-auto">
            <p className=" text-xs font-normal col-span-5 my-auto">{name} </p>
            <span className="text-base col-span-1 my-auto"> •</span>
            <div className=" col-span-3 my-auto">
              <BadgeDemo userRole={role} />
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="flex flex-row"><p className="text-md font-medium">{email}</p></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span><Link href={`/home/profile/${id}`}>Profile</Link></span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Paramètres</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={role  == "STUDENT" ? true : false } onClick={() => r.push('/home/board')} className="cursor-pointer">
          <Cloud className="mr-2 h-4 w-4" />
          <span>Tableau de bord</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span onClick={() => signOut()}>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
