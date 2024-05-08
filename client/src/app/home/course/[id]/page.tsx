"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import PDFcomp from "@/components/PDFcomp";
import Image from "next/image";
import img from "./../../../../../public/avatar.jpg"
import { Button } from "@/components/ui/button";
import { HiSave } from "react-icons/hi";
import { CourDescription } from "@/components/CourDescription";
import { Badge } from "@/components/ui/badge";



export default function SingleCoursePage() {
    const params = useParams();
    const id = params.id
    const [courseFile, setCourseFile] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [profileImageUrl, setProfileImageUrl] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [nomCour, setNomCour] = useState<string>('');
    const [section, setSection] = useState<string>('');
    const [role, setRole] = useState<string>('');
    let res = null
    useEffect(() => {
        async function getCourse() {
            try {
                res = await axios.get(`http://localhost:3000/api/courses/${id}`);
                setCourseFile(res.data.Course.fileUrl);
                setAuthor(res.data.User.name)
                setDescription(res.data.Course.description)
                setProfileImageUrl(res.data.User.image)
                setNomCour(res.data.Course.name)
                setRole(res.data.User.role)
                setSection(res.data.Course.section)
            } catch (error) {
                console.error(error);
            }
        }
        getCourse()
    }, []);

    return (
        <div className="space-y-5">
            <div className="p-4 bg-gradient-to-r from-amber-200 to-yellow-500 flex flex-col gap-y-2">
                <div className="top-2 mx-auto shadow-md shadow-zinc-400 w-32 h-32 md:w-40 md:h-40  bg-black  rounded-md border-[.3rem] border-violet-100 ">
                    <Image src={img} alt="" width={100} height={100} className="w-full" />
                </div>
                <div className="text-center ">
                    <p className=" text-slate-700    mx-2 text-2xl md:text-3xl font-medium">Publié par <span className="italic">{author}</span></p>
                    <p className="text-slate-500   mx-2 text-base font-semibold">{role}</p>
                </div>
            </div>
            <CourDescription nomCour={nomCour} description={description} />
            <div className="max-w-[890px] mx-auto flex justify-between">
                <Badge><span className="font-light mx-1">Section:</span>  {section}</Badge>
                <Button className="focus:bg-black focus:text-white transition ease-in" variant="outline">Enregistrez ce cours dans mon profil <HiSave className="mx-1" size="2em"/> </Button>
            </div>
            {<PDFcomp url={courseFile} />}
        </div>
    );
}
