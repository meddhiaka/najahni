"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { Badge } from "./ui/badge"


export function CardWithForm({ name, description, id, section }: {
    name: string | null,
    description: string | null,
    id: string,
    section: string
}) {
    const r: AppRouterInstance = useRouter()
    return (
        <Card className="w-[350px] h-fit">
            <CardHeader>
                <CardTitle>Cour du {name} </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Badge variant="outline">{section}</Badge>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={() => r.push(`http://localhost:3000/home/course/${id}`)}>Accéder au cours</Button>
            </CardFooter>
        </Card>
    )
}
