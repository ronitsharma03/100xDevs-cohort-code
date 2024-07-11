"use server";
import prisma from "@/db";

export async function Signupfn(username: string, password: string){
    try{
        await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        });
        // return the response
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}