import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "username@example.com"},
                password: {label: "Password", type: "password", placeholder: "123456"}
            },
            async authorize(credentials: any) {
                return {
                    id: "user1"
                }
            },
        })
    ]
});

export const GET = handler;
export const POST = handler;