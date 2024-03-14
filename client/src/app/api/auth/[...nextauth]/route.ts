import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'

const google_client_id = process.env.GOOGLE_CLIENT_ID!
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET!

const github_client_id = process.env.GITHUB_CLIENT_ID!
const github_client_secret = process.env.GITHUB_CLIENT_SECRET!

const facebook_client_id = process.env.FACEBOOK_CLIENT_ID!
const facebook_client_secret = process.env.FACEBOOK_CLIENT_SECRET!

const authOptions: NextAuthOptions = {
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
        })
    ],
    secret: process.env.SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }