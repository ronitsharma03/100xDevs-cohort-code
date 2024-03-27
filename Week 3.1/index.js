// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != "ronit" || password != "pass123"){
//             res.status(400).json({
//                 "msg": "Something wrong with inputs!"
//             })
//             return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             "msg": "Something wrong with inputs!"
//         })
//         return;
//     }

//     res.json({
//         msg: "Your kidney is fine!"
//     })
// });

// app.listen(3000, ()=>{
//     console.log("Server is up at 3000..");
// });

const express = require('express');
const app = express();


// let noOfReq = 0;
// function calRequests(req, res, next){
//     noOfReq++;
//     console.log(noOfReq);
//     next();
// }
// app.use(calRequests);
// function userMiddleware(req, res, next) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username != "ronit" || password != "pass"){
//         res.status(403).json({
//             msg: "Incorrect inputs!"
//         });
//     }
//     else{
//         next();
//     }
// }


// function kidneyMiddleware(req, res, next){
//     const kidneyId = req.params.kidneyId;
//     if(kidneyId != 1 || kidneyId != 2){
//         res.status(403).json({
//             msG: " incorrect inputs"
//         });
//     }
//     else{
//         next();
//     }
// }

// app.get('/heart-checkup', userMiddleware,(req, res) => {
//    res.send("Your heart is fine!");
// });
// app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
//     res.json({
//         "msg": "Your kidney is fine!"
//     });
// });
const zod = require('zod');
app.use(express.json());

const schema = zod.array(zod.number());
//More comples Zod schemas
//{
    // email: string => email,
    // password: atleast 8 letters LockManager,
    // country: "IN", "US"
// }

// const schema1 = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(literal("US")),
//     kidneys: zod.array(zod.number())
// })

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        // res.send(response.error.issues[0].code)
        res.status(411).json({
            msg: "Input missing!"
        })
    }
    // const kidneylength = kidneys.length;
    res.send(response);
});



app.listen(3000);