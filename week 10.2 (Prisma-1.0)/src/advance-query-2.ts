import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['info', 'query']
});


// select * form questions offset 0 limit10; -> shows the questions from 0 till 10
// select * form questions offset 10 limit20; -> 10 - 20
// select * form questions offset 20 limit30; -> 20 - 30
// SQL query for pagination
async function main(){
    let response = await prisma.user.findMany({
        take: 2, // -> take only 3 at a time -> works like limit;
        skip: 2 // -> And skip 10 -> works like offset;
    });

    console.log(response);
}

main();