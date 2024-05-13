import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.update({
        where: {
            email: "ronit@gmail.com"
        },
        data: {
            email: "ronit03gmail.com"
        }
    });
    console.log("Updated Successfully!")
}



main()
.then(async function(){
    await prisma.$disconnect();
})
.catch(async function(e){
    await prisma.$disconnect();
    process.exit(1);
})