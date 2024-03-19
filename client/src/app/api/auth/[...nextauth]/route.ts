import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios'
import { redirect } from "next/navigation";

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
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) return null
                const { email, password } = credentials
                const response = await axios.post(`${process.env.SERVER_ADDRESS}/v1/api/signin`, { email, password })
                if (response.status == 200) {
                    const user = response.data
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {

            const name = user.name
            const email = user.email

            let exists = null

            const res = axios.post('http://localhost:1337/v1/api/user', {
                email
            }).then(response => {
                exists = response.status
            })

            console.log(exists)

            const response = axios.post('http://localhost:1337/v1/api/oauth', {
                name, email
            })

            if (response !== null) return true

            return false;

        }
    },
    secret: process.env.SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }