import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            posts: {
                deleteMany: {
                    published: false
                }
            }
        }
    });
    console.log("Unpublished posts deleted successfully!");
}

main()
.then(async function(){
    await prisma.$disconnect();
})
.catch(async function(e){
    await prisma.$disconnect();
    process.exit(1);
})