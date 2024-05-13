import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.post.create({
        data: {
            title: "Last year at college",
            content: "Hey this is my new post. In this post i will be sharing the days of my college oin last year.",
            published: true,
            author: {
                connect: {
                    id: 6
                }
            }
        }
    })
    console.log("Created successfully!");
}

main()
.then(async function(){
    console.log("Disconnecting....");
    await prisma.$disconnect();
})
.catch(async function(e){
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})