'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { SingleImageDropzoneUsage } from "./ImageUploadComp"
import { useState } from "react"
import { useEdgeStore } from '@/lib/edgestore';



export function ProfileEditDemoDialog() {
  async function handleProfileForm() {
    

    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          console.log(progress);
        },
      });
    }
  }

  const [name, setName] = useState('')
  const [desc, setDes] = useState('')
  const [file, setFile] = useState<File>()

  const { edgestore } = useEdgeStore();


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-transparent text-white">Edit Profile</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <Label className='py-1 text-black' htmlFor='name'>Nom</Label>
          <Input className='mb-1' type='text' placeholder='Votre nom' value={name} onChange={e => setName(e.target.value)} />
          <Label className='py-1 text-black' htmlFor='name'>Description</Label>
          <Input className='mb-1' type='text' placeholder='Description de profil' value={desc} onChange={e => setDes(e.target.value)} />
          <Label className='py-1 text-black' htmlFor='name'>Image de profil</Label>
          <SingleImageDropzoneUsage file={file} setFile={setFile} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            onClick={handleProfileForm}
          >
            Upload
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
