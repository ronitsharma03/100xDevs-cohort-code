import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
    const userRes = await prisma.user.create({
        data: {
            username,
            password,
            firstname,
            lastname
        }
    });

    console.log(userRes);
}

interface updateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(username: string, {firstname, lastname}: updateParams){
    const updateData = await prisma.user.update({
        where: {
            username: username
        },
        data: {
            firstname: firstname,
            lastname: lastname
        }
    });

    console.log(updateData);
}


// insertUser("rk@gmail.com", "ronit@123", "Ronit", "khajuria")
updateUser("rk@gmail.com", {
    firstname: "Bebore",
    lastname: "Sharma"
})
.then(async function(){
    console.log("Updated successfully!");
    await prisma.$disconnect();
})
.catch(async function(e){
    console.log("Error: ",e);
    await prisma.$disconnect();
    process.exit(1);
})