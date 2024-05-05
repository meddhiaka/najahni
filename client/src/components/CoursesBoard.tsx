import { prisma } from "@/lib/prisma"
import { CardWithForm } from "./CourCard"
import { $Enums } from "@prisma/client";

async function findCoursesOfUser({id}:{ id: string | undefined; }) {
    if(id) {
        const courses = prisma.user.findUnique({
            where: {
                id: id
            },
            include: {
                cours: true
            }
        })
        console.log(courses)
        return courses
    }
}

export async function CoursesBoard(id:{ id: string | undefined; }) {
    const courses = await findCoursesOfUser(id)
    console.log(courses)
    return (
        <div className="flex flex-row flex-wrap gap-4 max-w-full mx-auto">
            {
                courses?.cours.map(e => (
                    <CardWithForm 
                        name={e.name}
                        description={e.description} 
                        id={e.id} 
                        section={e.section} 
                    />
                ))
            }
        </div>
    )
}

