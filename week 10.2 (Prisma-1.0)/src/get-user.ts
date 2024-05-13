import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const users = await prisma.user.findMany({});
    console.log(users);

    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    });
    console.log(user);
}


main()
.then(async function(){
    await prisma.$disconnect();
})
.catch(async function(e) {
    console.log(e);
    process.exit(1);
})