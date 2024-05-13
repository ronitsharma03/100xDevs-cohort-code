// debugging script to debug the SQL query

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    // by adding these also
    log: [{
        emit: "event",
        level: "query"
    }]
});

async function main(){
    const user = await prisma.user.findMany({
        take: 2
    });
    console.log(user);
}


main();


// while logginf the info and query it dont shows the parameters for security reasond
// But can be seen with this
prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`);
})