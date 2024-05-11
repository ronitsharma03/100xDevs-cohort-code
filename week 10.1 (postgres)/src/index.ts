import { Client } from "pg";


// Connection using the host, port and other properties
// const client = new Client({
//     host: 'ep-old-tree-a5v313e2.us-east-2.aws.neon.tech',
//     port: 5432,
//     database: 'Postgress-test',
//     user: 'ronitkhajuria03',
//     password: 'TgA1zXUu0Myl',
//     ssl: true
// });

// try {
//     client.connect();
//     console.log("Connection to DB successful");
// }catch(e){
//     console.log("Error connecting to DB: " + e);
// }

// Connection using a connection string

const client = new Client({
    connectionString: "postgresql://ronitkhajuria03:TgA1zXUu0Myl@ep-old-tree-a5v313e2.us-east-2.aws.neon.tech/Postgress-test?sslmode=require"
});


async function connectToDb(){
    try{
        await client.connect();
        console.log("Connection to DB successful!");
    }
    catch(e){
        console.log("Error connecting to DB : " + e);
    }
}


async function createTable(){
    const tableQuery = `
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `;

    console.log(tableQuery);

    const tableRes = await client.query(tableQuery);

    console.log("Table created successfully!");
    console.log(tableRes);
}

async function insertData(){
    const insertQuery = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
    `;
    const userData = ['bebore', 'bebore@gmail.com', 'bebore@123'];

    const dataRes = await client.query(insertQuery, userData);

    console.log(dataRes);
    console.log("Data inserted successfully!");

}

connectToDb();
// createTable();
insertData();
