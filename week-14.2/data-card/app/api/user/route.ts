import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prismaClient = new PrismaClient();

export async function GET(req: NextRequest){
    
    const response = await prismaClient.user.findFirst({});

    if(!response){
        return NextResponse.json({
        message: "User not found"
        });
    }

    return NextResponse.json({
        id: response?.id,
        email: response?.username
    });
}

export async function POST(req: NextRequest){
    // Take the body from the req
    try{

        const body = await req.json();
        
        // Store it in the database
        console.log(body);
        const response = await prismaClient.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        });
        
        if(!response){
            return NextResponse.json({
                message: "Error while signing up"
            })
        }
        
        // return the response
        return NextResponse.json({
            message: "You are Signed up!"
        });
    }catch(error){
        return NextResponse.json({
            message : "Error while signing up!"
        },{
            status: 411 
        })
    }

}
