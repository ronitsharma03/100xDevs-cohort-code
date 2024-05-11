"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
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
const client = new pg_1.Client({
    connectionString: "postgresql://ronitkhajuria03:TgA1zXUu0Myl@ep-old-tree-a5v313e2.us-east-2.aws.neon.tech/Postgress-test?sslmode=require"
});
try {
    client.connect();
    console.log("Connection to DB successful!");
}
catch (e) {
    console.log("Error connecting to DB : " + e);
}
