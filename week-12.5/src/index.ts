import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface userType {
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

interface todoType {
    title: string;
    description: string;
    done?: boolean;
    createdAt?: Date;
}

const userData = {
    username: 'ronit@gmail.com',
    password: 'Mysecret',
    firstName: 'Ronit'
};

async function insertuser(userData: userType) {
    const response = await prisma.user.create({
        data: userData
    });

    console.log(response);
}

insertuser(userData);