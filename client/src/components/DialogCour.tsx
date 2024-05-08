"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { MultiFileDropzone, type FileState, } from "./UploadSpace"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { TextareaDemo } from "./TextAreaEx"
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from "react"
import axios from "axios"
import { toast } from "./ui/use-toast"
import { redirect, useRouter } from "next/navigation"


export function AlertDialogDemo({ id }: {
    id: {
        id: string;
    } | null | undefined
}) {
    const [subjectName, setSubjectName] = useState<string>('')
    const [subjectDescription, setSubjectDescription] = useState<string>('')
    const [section, setSection] = useState<string>('')
    const [fileUrl, setFileUrl] = useState<string>('')
    const [urls, setUrls] = useState<string[]>([])
    const r  = useRouter()

    const [fileStates, setFileStates] = useState<FileState[]>([]);
    const { edgestore } = useEdgeStore();

    function updateFileProgress(key: string, progress: FileState['progress']) {
        setFileStates((fileStates) => {
            const newFileStates = structuredClone(fileStates);
            const fileState = newFileStates.find(
                (fileState) => fileState.key === key,
            );
            if (fileState) {
                fileState.progress = progress;
            }
            return newFileStates;
        });
    }

    async function handleFormSubjectUpload() {
        if (subjectName !== "" && subjectDescription !== "" && fileUrl !== "" && section !== "") {
            const data = {
                name: subjectName,
                subjectDescription: subjectDescription,
                fileUrl: fileUrl,
                section: section,
                id: id?.id
            }

            const res = await axios.post('http://localhost:3000/api/courses', data)
            for (const url of urls) {
                await edgestore.publicFiles.confirmUpload({
                    url
                })
            }
            setTimeout(async () => {
                toast({
                    title: "Publication du sujet réussie !",
                    description: "Votre sujet a été publié avec succès. Merci pour votre contribution !",
                    duration: 5000
                }
                )
            }, 5000)
            setTimeout(async () => {
                window.location.reload()
            }, 1000)
        } else {
            toast({
                title: "Validation du formulaire",
                description: "Veuillez remplir tous les champs du formulaire avant de soumettre.",
                duration: 5000
            })
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Nouveau Cours</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <Label className='py-1 text-black' htmlFor='name'>Nom du cours</Label>
                    <Input className='mb-1' type='text' placeholder='Nom du cours' value={subjectName} onChange={e => setSubjectName(e.target.value)} />
                    <Label className='py-1 text-black' htmlFor='name'>Description du cours</Label>
                    <TextareaDemo placeholder="Description du cours" value={subjectDescription} setValue={setSubjectDescription} />
                    <Label className='py-1 text-black' htmlFor='name'>Choisir Section</Label>
                    <div className="flex space-x-2">
                        <Button variant="outline" className={section === "GLSI2" ? "focus:outline-dashed" : ""} onClick={() => setSection('GLSI2')}>GLSI2</Button>
                        <Button variant="outline" className={section === "SEIOT2" ? "focus:outline-dashed" : ""} onClick={() => setSection('SEIOT2')}>SEIOT2</Button>
                        <Button variant="outline" className={section === "CPI2" ? "focus:outline-dashed" : ""} onClick={() => setSection('CPI2')}>CPI2</Button>
                    </div>
                    <div className="mx-auto pt-10">
                        <MultiFileDropzone
                            value={fileStates}
                            onChange={(files) => {
                                setFileStates(files);
                            }}
                            dropzoneOptions={{
                                maxFiles: 1,
                                maxSize: 1024 * 1024 * 3
                            }}
                            onFilesAdded={async (addedFiles) => {
                                setFileStates([...fileStates, ...addedFiles]);
                                await Promise.all(
                                    addedFiles.map(async (addedFileState) => {
                                        try {
                                            const res = await edgestore.publicFiles.upload({
                                                file: addedFileState.file,
                                                options: {
                                                    temporary: true
                                                },
                                                onProgressChange: async (progress) => {
                                                    updateFileProgress(addedFileState.key, progress);
                                                    if (progress === 100) {
                                                        await new Promise((resolve) => setTimeout(resolve, 1000));
                                                        updateFileProgress(addedFileState.key, 'COMPLETE');
                                                    }
                                                },
                                            });
                                            setUrls([res.url])
                                            setFileUrl(res.url)
                                        } catch (err) {
                                            updateFileProgress(addedFileState.key, 'ERROR');
                                        }
                                    }),
                                );
                            }}
                        />
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleFormSubjectUpload}
                    >
                        Publier
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
