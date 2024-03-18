"use client"

import { ImagesSliderDemo } from '@/components/Slider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'




function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    async function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false
        })
        console.log(res)
    }

    

    return (
        <div className='h-[40rem] md:overflow-hidden  w-full md:h-screen mx-auto flex flex-row'>
            <div className='hidden md:block w-0 md:w-1/2 bg-purple-300 relative'>
                <ImagesSliderDemo />
            </div>
            <div className='w-full md:w-1/2 bg-purple-600 relative'>
                <Button variant="secondary" className='invisible md:visible absolute right-1 top-1'>Sign Up</Button>
                <div className=' w-4/6 mx-auto flex flex-col justify-center h-full'>
                    <div className='my-3'>
                        <h1 className='text-white text-center text-3xl  md:text-[2rem] font-bold my-1'>Connectez-vous à votre compte!</h1>
                        <p className=' text-white text-sm md:text-base text-center md:mx-20'>Veuillez saisir votre e-mail et votre mot de passe pour vous connecter, <b>Merci.</b></p>
                    </div>
                    <Label className='my-2 text-white' htmlFor='email'>E-mail</Label>
                    <Input value={email} onChange={e => setEmail(e.target.value)} className='mb-1 focus:border-purple-600 outline-none' type='email' placeholder='nom@exemple.domaine' />
                    <Label className='my-2 text-white' htmlFor='password'>Mot de passe</Label>
                    <Input value={password} onChange={e => setPassword(e.target.value)} className='mb-1 focus:border-purple-600 outline-none' type='password' placeholder='Votre mot de passe' />
                    <Button onClick={(e) => handleLogin(e)} type='submit' variant="secondary" className='mt-2'>Se Connecter</Button>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 " />
                        <span className="absolute px-3 font-medium text-white -translate-x-1/2 bg-purple-600 left-1/2 ">Ou bien</span>
                    </div>
                    <Button variant="default" className='md:invisible hidden my-2 bg-transparent border-[1px] border-white hover:bg-slate-50 hover:text-black'>S'inscrire</Button>
                    <Button className='my-[2px]' variant="secondary"><FcGoogle className=' ml-6 text-2xl inline' /><span className=""><span className="mx-2">Continuer avec Google</span></span></Button>
                    <Button className='my-[2px]' variant="secondary"><FaFacebook className=' text-[#0866FF] ml-6 text-2xl inline' /><span className=""><span className="mx-2">Continuer avec Facebook</span></span></Button>
                    <Button className='my-[2px]' variant="secondary"><FaGithub className=' ml-6 text-2xl inline text-black' /><span className=""><span className="mx-2">Continuer avec GitHub</span></span></Button>
                </div>
            </div>
        </div>
    )
}

export default Login