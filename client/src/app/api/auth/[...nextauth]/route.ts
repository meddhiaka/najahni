import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios'
import NextAuth from "next-auth/next";
import { prisma } from "@/lib/prisma";


const google_client_id = process.env.GOOGLE_CLIENT_ID!
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET!

const github_client_id = process.env.GITHUB_CLIENT_ID!
const github_client_secret = process.env.GITHUB_CLIENT_SECRET!

const facebook_client_id = process.env.FACEBOOK_CLIENT_ID!
const facebook_client_secret = process.env.FACEBOOK_CLIENT_SECRET!

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: google_client_id,
            clientSecret: google_client_secret
        }),
        GithubProvider({
            clientId: github_client_id,
            clientSecret: github_client_secret
        }),
        FacebookProvider({
            clientId: facebook_client_id,
            clientSecret: facebook_client_secret
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                if (!credentials) return null
                try {
                    const { email, password }: { email: string, password: string } = credentials
                    const res = await axios.post("http://localhost:3000/api/user/signin", { email, password })
                    if (res.status == 200) {
                        return {
                            email,
                            password
                        }
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.log(error)
                }
            },
        }),

    ],
    callbacks: {
        async signIn({ user, account, profile }) {

            const nameInput = user.name
            const emailInput = user.email

            await prisma.user.upsert({
                where: { email: emailInput },
                update: {},
                create: {
                    name: nameInput,
                    email: emailInput,
                    emailVerified: true
                }
            })
            return true
        }
    },
    secret: process.env.NEXT_AUTH_SECRET,
    pages: {
        signIn: "/login",
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


