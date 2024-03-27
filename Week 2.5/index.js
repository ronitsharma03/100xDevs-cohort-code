const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
app.use(express.json());
var users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthykidneys = 0;
    for(let i = 0; i < numberOfKidneys; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthykidneys = numberOfHealthykidneys + 1;
        }
    }
    const numberOfUnhealthykidneys = numberOfKidneys - numberOfHealthykidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthykidneys,
        numberOfUnhealthykidneys
    });
});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Successfully Done!"
    });
});

app.put('/', (req, res) => {
 for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;   
  }
res.json({
    msg: "Successfully done!"
});
});

app.delete('/', (req, res) =>{
    if(isthereAtleastOneunhealthykidney()){
        const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done!"});
    }
    else{
        res.status(411).json({msg: "Bro, What the fuck you don't have any unhealthy kidney!"
    })
    }
});

function isthereAtleastOneunhealthykidney(){
    let atleastoneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneUnhealthyKidney = true;
        }
    }
    return atleastoneUnhealthyKidney;
}


app.listen(3000, () => {
    console.log("Server is up at 3000");
})