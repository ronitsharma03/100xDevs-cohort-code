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
function sum(a: number, b: number): number {
    return a + b;
}

const value = sum(3, 4);
console.log(value)

function isLegal(age: number): boolean {
    if (age >= 18) {
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
function callback(cb: () => void, delay: number) {
    setTimeout(cb, delay);
}

callback(() => {
    console.log("Hello world after 2s");
}, 2000);


// Another better approach to initialize a typescript project 
// All the ts files that needs to be compiled are stored in a src folder and output js files to be stoed in another folder call it
// dist or build -> that has to be configured in the tsconfig.json file in rootDir and the outDir


// Interfaces in typescript

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // ? means optional
}

function isLegal2(user: User) {
    if (user.age > 18) {
        return true;
    }
    return false;
}

function greet2(user: User) {
    console.log("Hi, " + user.firstName);
}

greet2({
    firstName: "Ronit",
    lastName: "Kahjuria",
    age: 20
});

const isOk = isLegal2({
    firstName: "Ronit",
    lastName: "Khajuria",
    age: 20
});

if (isOk) {
    console.log("You can vote")
}
else {
    console.log("You can't vote")
}

// Implementing class from interfaces
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// While implementing class from a interface these should always be defines acc to their types
// types are also similar as interface but there is a big difference btw them
// the difference is interfaces lets you implement classes form them while types won't
class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, a: number) {
        this.name = name;
        this.age = a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

const obj = new Employee("Ronit", 20);
console.log(obj.name +" "+ obj.age);

type person1 = {
    name: string;
    age?: number;
    department: string;
}

interface person2 {
    startDate: Date;
    endDate: Date;
}

// Intersection in type -> let u use the property of more than on interface and type or type and type or interface and interface
type newPerson = person1 & person2;

const t: newPerson = {
    name: "Ronit",
    department: "IT",
    startDate: new Date(),
    endDate: new Date()
};


// Exapmle of arrays in typescript
const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);


// Enums -> Enumerations in TS
// By default these will contain number value starting from 0 till the no. of things inside enums
// Set manual values to them as below:

enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function doSomething(keypressed: Direction){
    if(keypressed == Direction.Up){
        console.log("Do this");
    }
    if(keypressed == Direction.Down){
        console.log("..");
    }
    // otherwise .....
}

doSomething(Direction.Up);
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

// Generics in TS

function identity<T>(arg: T){
    return arg;
}

const res = identity<string>("Ronit");
const res2 = identity<number>(21);
console.log(res.toUpperCase());
console.log(res2);

// Another example
// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?
type newType = string | number;
function solution (arg: newType){
    return arg;
}
const var1 = solution("Ronit");
solution(21);
// console.log(var1.toUpperCase()) This function can't be used as the type of arg is newType type as it don't implicitly specify if it is
// string or number and TS is not a smart enough to infer the return type
// So generics can be used to solve this problem
function identity2<T>(arg: T): T {
    return arg;
}

let output1 = identity2<string>("myString");
let output2 = identity2<number>(100);