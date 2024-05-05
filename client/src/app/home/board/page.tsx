import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { CardWithForm } from "@/components/CourCard"
import { CoursesBoard } from "@/components/CoursesBoard"
import { AlertDialogDemo } from "@/components/DialogCour"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"

async function getSessionCustom() {
  const response = await getServerSession(authOptions)
  return response
}

async function getUserId(email: string | null | undefined) {
  if (email && email !== null) {
    const res = await prisma.user.findUnique({
      where: {
        email: email
      },
      select: {
        id: true
      }
    })
    return res
  }
}



export default async function PersonalBoard() {
  const session = await getSessionCustom()
  const idData = await getUserId(session?.user?.email)
  return (
    <div className="w-screen  border-t pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-end">
          <AlertDialogDemo id={idData} />
        </div>
        <div className="pt-6">
         <CoursesBoard id={idData?.id} />
        </div>
      </div>
    </div>
  )
}