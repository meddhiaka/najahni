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

export function CourDescription({ nomCour, description }: {
    nomCour: string, description: string | undefined | null
}) {
    return (
        <div className="mx-4">
            <Card className="max-w-[915px] mx-auto">
                <CardHeader>
                    <CardTitle>{nomCour}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description == null ? "Vous n'avez pas de à propos..." : description}</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}
