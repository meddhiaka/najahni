import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

function Landing() {
    return (
        <div className="container-custom">
            <div className="elt1 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/1.png" width={500} height={500} alt="" /></div>
            <div className="elt2 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/2.jpg" width={500} height={500} alt="" /></div>
            <div className="elt3 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/3.jpg" width={500} height={500} alt="" /></div>
            <div className="elt4 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/4.jpeg" width={500} height={500} alt="" /></div>
            <div className="elt5 border-4 border-slate-900 grid place-content-center">
                <div className="w-full h-full">
                    <h1 className="scale-110 text-3xl font-bold text-center mb-4 leading-[2.6rem] mx-10">Apprentissage virtuel conçu pour la FSB, Cours et quiz sur notre plateforme en ligne.</h1>
                    <p className="text-center text-lg font-semibold text-slate-800">Là où l'éducation rencontre <span className="underline" style={{ "textDecorationThickness": "4px" }}>l'innovation!</span></p>
                    <div className="flex flex-col gap-y-3 items-center my-5">
                        <div className="h-9 w-4/6 ">
                            <button className="hover:bg-purple-100 focus:bg-purple-100 transition rounded border-[1.5px] border-blue-950 flex h-full w-full items-center justify-center bg-white text-blue-950 font-semibold "><FcGoogle className=' ml-6 text-2xl inline' /><span className=""><span className="mx-2">Continuer avec Google</span></span></button>
                        </div>
                        <div className="h-9 w-4/6">
                            <button className="hover:bg-purple-100 focus:bg-purple-100 transition rounded border-[1.5px] border-blue-950 flex h-full w-full items-center justify-center bg-white text-blue-950 font-semibold "><FaFacebook className=' text-[#0866FF] ml-6 text-2xl inline' /><span className=""><span className="mx-2">Continuer avec Facebook</span></span></button>
                        </div>
                        <div className="h-9 w-4/6">
                            <button className="hover:bg-purple-100 focus:bg-purple-100 transition rounded border-[1.5px] border-blue-950 flex h-full w-full items-center justify-center bg-white text-blue-950 font-semibold "><FaGithub className=' ml-6 text-2xl inline text-black' /><span className=""><span className="mx-2">Continuer avec GitHub</span></span></button>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="rounded hover:underline px-2 py-1 transition hover:bg-purple-50 focus:bg-slate-100 focus:underline  text-base font-semibold text-purple-900">Continuer avec une adresse e-mail</button>
                    </div>
                </div>
            </div>
            <div className="elt6 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/6.jpg" width={500} height={500} alt="" /></div>
            <div className="elt7 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/7.jpg" width={500} height={500} alt="" /></div>
            <div className="elt8 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/8.jpg" width={500} height={500} alt="" /></div>
            <div className="elt9 border-4 border-slate-900"><Image className="object-cover h-full w-full" src="/landing/9.jpg" width={500} height={500} alt="" /></div>
        </div>
    )
}

export default Landing