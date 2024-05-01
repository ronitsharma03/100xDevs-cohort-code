// function getAnimalData(){
// //    alert("You pressed a button") 
//    fetch("https://fakerapi.it/api/v1/persons")
//    .then((response) => {
//     response.json()
//     .then(function (res){
//         console.log(res)
//     })
//    })
// }

//Much cleaner and readable way
async function getAnimalData(){
   const response = await fetch("https://fakerapi.it/api/v1/persons")
   const finalData = await response.json();
   console.log(finalData)
   document.getElementById('hello').innerHTML = JSON.stringify(finalData.data);
}