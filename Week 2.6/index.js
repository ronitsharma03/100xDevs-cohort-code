let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     arr[i] *= 2;
// }
// console.log(arr);
// console.log(arr.map((n)=>{
//     return 2 * n;
// }));
// function mapIt(arr, fn){
//     let reArr = [];
//     for(let i = 0; i < arr.length; i++){
//         reArr.push(fn(arr[i]));
//     }
//     return reArr;
// }

// function theFn(n){
//     return n * 2;
// }
// const newArr = mapIt(arr, theFn);
// console.log(newArr);

// console.log(arr.filter((n) => {
//     if(n % 2 == 0){
//         return n;
//     }
// }));

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   console.log(persons.map(getFullName));
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }