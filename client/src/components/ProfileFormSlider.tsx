"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SingleImageDropzoneUsage } from "./ImageUploadComp"
import { useEffect, useState } from "react"
import { useEdgeStore } from '@/lib/edgestore';
import { prisma } from "@/lib/prisma"


export function SheetDemo({
    email, name, description
}: {
    email: string | null | undefined,
    name: string | null | undefined,
    description: string | null | undefined
}) {


    const [newName, setNewName] = useState(name)
    const [desc, setDes] = useState(description)
    const [file, setFile] = useState<File>()
    const [url, setUrl] = useState('')
    const { edgestore } = useEdgeStore();

    async function handleProfileForm() {
        if (file) {
            const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    console.log(progress);
                },
                options: {
                    temporary: true
                },
            });

            setUrl(res.url)

            // last step
            const reply = await prisma.user.update({
                where: {
                    email: email || null || undefined
                },
                data: {
                    name: name,
                    description: desc,
                    image: url
                }

            })

            await edgestore.publicFiles.confirmUpload({
                url
            })

        }
    }


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="bg-transparent text-white" variant="outline">Modifier le profil</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Modifier le profil</SheetTitle>
                    <SheetDescription>
                        Apportez des modifications à votre profil ici, Cliquez sur Enregistrer lorsque vous avez terminé.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" value={newName} onChange={e => setNewName(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            À propos
                        </Label>
                        <Input id="username" value={desc} onChange={e => setDes(e.target.value)} className="col-span-3" />
                    </div>
                    <SingleImageDropzoneUsage
                        width={200}
                        height={200}
                        value={file}
                        onChange={(file) => {
                            setFile(file);
                        }}
                        file={file}
                        setFile={setFile}
                    />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button onClick={handleProfileForm}>Enregistrer</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
