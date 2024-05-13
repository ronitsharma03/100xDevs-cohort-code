import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){
    let response = await prisma.user.findMany({
        where: {
            email: {
                endsWith: "@gmail.com"
            },
            posts: {
                some: {
                    published: true
                }
            }
        },
        include: {
            posts: {
                where: {
                    published: true
                }
            }
        }
    });
    console.log("User: ", response);
    response.map(user => {
        console.log("Posts: ", user.posts);
    })
}

main()
.then(async function(){
    await prisma.$disconnect();
})
.catch(async function(e){
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})