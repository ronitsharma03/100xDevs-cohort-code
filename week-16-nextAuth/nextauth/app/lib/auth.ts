import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "username@example.com"},
                password: {label: "Password", type: "password", placeholder: "123456"}
            },
            async authorize(credentials: any) {
                console.log(credentials);

                return {
                    id: "dkl90dnd93ndin",
                    name: "Ronit khajuria",
                    email: "ronitkhajuria03@gmail.com"
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTHID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),
        GithubProvider({
            clientId: process.env.GITHUB_AUTHID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({token, user}: any) => {
            token.userId = token.sub;
            return token;
        },
        session: ({session, token, id}: any) => {
            if(session && session.user){
                session.user.id = token.userId; // token.sub -> totally can be done
            }
            return session;
        }
    }
}