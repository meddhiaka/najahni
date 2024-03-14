import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const google_client_id = process.env.GOOGLE_CLIENT_ID!
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET!

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: google_client_id,
            clientSecret: google_client_secret
        })
    ],
    secret: process.env.SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }