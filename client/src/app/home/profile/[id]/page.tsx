import { prisma } from "@/lib/prisma"
import Image from "next/image"
import img from "./../../../../../public/avatar.jpg"
import { SheetDemo } from "@/components/ProfileFormSlider"
import { CourDescription } from "@/components/CourDescription"

function getId(a: string): string {
    const tab = a.split("/")
    const res: string = tab[tab.length - 1]
    return res
}

async function getProfileData(id: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            name: true,
            role: true,
            email: true,
            description: true
        }
    })
    return data
}

export default async function Profile({ params }: { params: { id: string } }) {
    const e = await getProfileData(params.id)
    return (
        <div className="mx-auto space-y-7">
            <div className="p-28 bg-gradient-to-r from-white  via-red-300 to-violet-500 relative">
                <div className="top-28 md:top-20  shadow-md shadow-zinc-400 w-32 h-32 md:w-40 md:h-40 left-5 md:left-16 bg-black absolute rounded-md border-[.3rem] border-violet-100">
                    <Image src={img} alt="" width={100} height={100} className="w-full" />
                </div>
                <p className="absolute text-black bottom-7 left-36 md:left-56 mx-2 text-2xl md:text-3xl font-medium">{e?.name}</p>
                <p className="absolute text-slate-500 bottom-1 left-36 md:left-56 mx-2 text-base font-semibold">{e?.role}</p>
                <div className="top-1 right-1 absolute">
                    <SheetDemo email={e?.email} name={e?.name} description={e?.description} />
                </div>
            </div>
            <div className="py-4">
                <CourDescription nomCour="À propos" description={e?.description} />
            </div>

        </div>
    )
}