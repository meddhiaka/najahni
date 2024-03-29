import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
    return (
        <Tabs defaultValue="Accueil" className="w-[300px]">
            <TabsList  className="grid w-full grid-cols-3">
                <TabsTrigger value="Accueil">Accueil</TabsTrigger>
                <TabsTrigger value="courses">Cours</TabsTrigger>
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
