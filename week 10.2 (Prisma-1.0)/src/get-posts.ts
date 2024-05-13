import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const posts = await prisma.post.findMany({});
    console.log(posts);
    const post = await prisma.post.findUnique({
        where: {
            id: 3
        }
    });
    console.log(post);
}

main