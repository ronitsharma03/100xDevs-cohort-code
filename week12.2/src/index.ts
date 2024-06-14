interface User {
    id: number;
    password: string;
    name: string;
    age: number;
};

function sumOfAge(user1: User, user2: User): number{
    return user1.age + user2.age;
}

// const totalAge = sumOfAge({name:"Ronit", age: 21}, {name: "Jiro", age: 22});
// console.log(totalAge);