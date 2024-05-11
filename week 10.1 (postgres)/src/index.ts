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


async function connectToDb() {
    try {
        await client.connect();
        console.log("Connection to DB successful!");
    }
    catch (e) {
        console.log("Error connecting to DB : " + e);
    }
}


async function createTable() {
    // const tableQuery = `
    //     CREATE TABLE users(
    //         id SERIAL PRIMARY KEY,
    //         username VARCHAR(100) UNIQUE NOT NULL,
    //         email VARCHAR(255) UNIQUE NOT NULL,
    //         password VARCHAR(255) NOT NULL,
    //         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    //     )
    // `;

    const tableQuery = `
    CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    `;

    console.log(tableQuery);

    const tableRes = await client.query(tableQuery);

    console.log("Table created successfully!");
    console.log(tableRes);
}

async function insertData() {
    try {
    //     const insertQuery = `
    //     INSERT INTO users (username, email, password)
    //     VALUES ($1, $2, $3)
    // `;

    const insertQuery = `
        INSERT INTO addresses (user_id, city, country, street, pincode)
        VALUES ($1, $2, $3, $4, $5)
    `;
        const userData = [1, 'Pune', 'India', '30/8 ambegaon bk', '411043'];
        const dataRes = await client.query(insertQuery, userData);

        console.log(dataRes);
        console.log("Data inserted successfully!");
    } catch (e) {
        console.log("Error inserting data!");
    } finally {
        await client.end();
    }
}

async function getUserWithEmail(emailId: string) {
    try {
        const userQuery = `
            SELECT * FROM users where email = $1
        `;
        const queryRes = await client.query(userQuery, [emailId]);
        console.log(queryRes);
        if (queryRes.rows.length > 0) {
            console.log(`User found: \nUsername: ${queryRes.rows[0].username} Email: ${queryRes.rows[0].email}`);
            return queryRes.rows[0].username;
        }
        else {
            console.log("User not found");
            return null;
        }
    }
    catch (e) {
        console.log(`Error searching data: ${e}`);
        throw e;
    }
    finally {
        console.log("Disconnecting from DB....");
        await client.end();
    }
}



connectToDb();
// createTable();
// insertData();
// getUserWithEmail("ronit@gmail.com").catch(console.error);
