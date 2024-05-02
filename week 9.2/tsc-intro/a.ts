// Assigning :any to a variable can let you change the original type of the variable
let x: any = 1;
x = "String";

function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
}

// greet("Ronit");


// Type inference -> If you are passing any arguments to a function that are number and the fn returns their sum it is obvious that 
// the return type would be number so it depends on you whether to specify the return type of the function or not, beacuse typescript
// would automatically knows what type of value will be returned by the function
// But in general it is a good practice tho to specify the return type of the functions at function parameters 
function sum (a: number, b: number): number{
    return a+b;
}

const value = sum(3, 4);
console.log(value)

function isLegal(age: number): boolean{
    if(age >= 18){
        return true;
    }
    return false;
}

// const ans = isLegal(17);
// console.log(ans);

// Not a good way but still works
// function callback(cb: any, delay: number){
//     setTimeout(()=>{
//         const val = cb(18)
//         console.log(val)
//     }, delay);
// }

// Better approach -> callback function arguments are specified in the brackets....
function callback(cb : ()=> void, delay: number){
    setTimeout(cb, delay);
}

callback(()=>{
    console.log("Hello world after 2s");
}, 2000);