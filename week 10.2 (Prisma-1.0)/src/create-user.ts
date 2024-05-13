import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    console.log("Hi there!");
    await prisma.user.createMany({
        data: [
            {
                email: "niman@gmail.com",
                name: "Niman"
            },
            {
                email: "anurag@gmail.com",
                name: "Anurag"
            },
            {
                email: "prashant@gmail.com",
                name: "Prashant"
            },
            {
                email: "akrati@gmail.com",
                name: "Akrati"
            }
        ]
    });

}

main()
    .then(async function () {
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });