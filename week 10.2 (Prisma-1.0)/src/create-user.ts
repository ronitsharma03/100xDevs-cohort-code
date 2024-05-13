import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  console.log("Hi there!");
  await prisma.user.create({
    data: {
        email: "ronit@gmail.com",
        name: "Ronit"
    }
  });

}

main()
.then(async function() {
await prisma.$disconnect();
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });