import { prisma } from "@/lib/prisma"
import { CardWithForm } from "./CourCard"
import { $Enums } from "@prisma/client";

async function findCoursesOfUser({ id }: { id: string | undefined; }) {
    if (id) {
        const courses = prisma.user.findUnique({
            where: {
                id: id
            },
            include: {
                cours: true
            }
        })
        return courses
    }
}

export async function CoursesBoard(id: { id: string | undefined; }) {
    const courses = await findCoursesOfUser(id)
    return (
        <div className="flex flex-row flex-wrap gap-4 max-w-full mx-auto min-h-[3000px]">
            {
                courses?.cours.length !== 0 ? (
                    courses?.cours.map(e => (
                        <CardWithForm
                            name={e.name}
                            description={e.description}
                            id={e.id}
                            section={e.section}
                        />
                    ))
                ) : (
                    <div className="max-w-5xl mx-auto text-3xl">
                        Il n'y a pas de cours ...
                    </div>
                )
            }
        </div>
    )
}

