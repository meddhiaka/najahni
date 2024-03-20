'use client'
import { ImagesSliderDemo } from '@/components/Slider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useToast } from '@/components/ui/use-toast'


function SignUp() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const session = useSession()
    const { toast } = useToast()

    session.status === "authenticated" ? redirect('/home') : console.log('')


    async function handleSignUp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password
        }
        const response = await axios.post("http://localhost:1337/v1/api/signup", data)
        console.log(response.status)
        if (response?.status == 201) {
            toast({
                title: "Inscription réussie!",
                description: "Bienvenue! Vous êtes inscrit(e) avec succès, Vous allez être redirigé(e) dans quelques secondes...",
                duration: 14000
            })
            setTimeout(async () => {
                await signIn('credentials', {
                    email,
                    password,
                    callbackUrl: 'http://localhost:3000/home'
                })
            }, 15000)

        } else {
            console.log(response.status)
        }
    }
    return (
        <div className='h-[40rem] md:overflow-hidden  w-full md:h-screen mx-auto flex flex-row'>
            <div className='w-full md:w-1/2 bg-purple-950 relative'>
                <Link href={"/login"}><Button variant="secondary" className='invisible md:visible absolute left-1 top-1 bg-transparent text-white border-[1px] border-white hover:text-purple-800'>Se Connecter</Button></Link>
                <div className=' w-4/6 mx-auto flex flex-col justify-center h-full'>
                    <div className='my-3'>
                        <h1 className='text-white text-center text-3xl  md:text-[2rem] font-bold my-1'>Inscrivez-vous dès maintenant!</h1>
                    </div>
                    <Label className='my-2 text-white' htmlFor='name'>Name</Label>
                    <Input value={name} onChange={e => setName(e.target.value)} className='mb-1 focus:border-purple-600 outline-none' type='text' placeholder='Votre nom' />
                    <Label className='my-2 text-white' htmlFor='email'>E-mail</Label>
                    <Input value={email} onChange={e => setEmail(e.target.value)} className='mb-1 focus:border-purple-600 outline-none' type='email' placeholder='nom@exemple.domaine' />
                    <Label className='my-2 text-white' htmlFor='password'>Mot de passe</Label>
                    <Input value={password} onChange={e => setPassword(e.target.value)} className='mb-1 focus:border-purple-600 outline-none' type='password' placeholder='Votre mot de passe' />
                    <Button onClick={(e) => handleSignUp(e)} type='submit' variant="secondary" className='mt-2'>S'inscrire</Button>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 " />
                        <span className="absolute px-3 font-medium text-white -translate-x-1/2 bg-purple-950 left-1/2 ">Ou bien</span>
                    </div>
                    <Button variant="default" className='md:invisible hidden my-2 bg-transparent border-[1px] border-white hover:bg-slate-50 hover:text-black'>S'inscrire</Button>
                    <Link href={"/login"} className='py-2 px-2 text-white rounded transition text-center w-full block md:hidden  my-2 bg-transparent border-[1px] border-white hover:bg-slate-50 hover:text-black'>Se Connecter</Link>
                    <Button onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/home' })} className='my-[2px]' variant="secondary"><FcGoogle className=' ml-6 text-2xl inline' /><span className=""><span className="mx-2">Continuer avec Google</span></span></Button>
                    <Button onClick={() => signIn('facebook', { callbackUrl: 'http://localhost:3000/home' })} className='my-[2px]' variant="secondary"><FaFacebook className=' text-[#0866FF] ml-6 text-2xl inline' /><span className=""><span className="mx-2">Continuer avec Facebook</span></span></Button>
                    <Button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/home' })} className='my-[2px]' variant="secondary"><FaGithub className=' ml-6 text-2xl inline text-black' /><span className=""><span className="mx-2">Continuer avec GitHub</span></span></Button>
                </div>
            </div>
            <div className='hidden md:block md:w-1/2  relative'>
                <ImagesSliderDemo />

            </div>
        </div>
    )
}

export default SignUp