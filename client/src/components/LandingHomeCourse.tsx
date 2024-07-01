import Link from "next/link";
import { Button } from "./ui/button";

export default function LandingHomeCourse({ e }: { e: {} }) {
    return (
        <div className="w-full sm:mx-0 rounded-md border-2 p-1 sm:w-[470px] h-[265px] flex-none">
            <div className=" grid gap-4 p-6">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{e.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{e.description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                            <img
                                className="aspect-square h-full w-full"
                                alt="Teacher Avatar"
                                src={e.icon}
                            />
                        </span>
                        <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Instructor</p>
                        </div>
                    </div>
                    <Button variant="outline"><Link href={`http://localhost:3000/home/course/${e.id}`}>View Course</Link></Button>
                </div>
            </div>
        </div>
    )
}