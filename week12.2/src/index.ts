interface User {
    id: number;
    password: string;
    name: string;
    age: number;
};

function sumOfAge(user1: User, user2: User): number{
    return user1.age + user2.age;
}


type newUser = Pick<User, 'name' | 'password'>;
type partialProfile = Partial<newUser>;

const updateDetails = (user: newUser) => {
// body;
}

const updateBody = (user: partialProfile) => {
    //body;
}
// const totalAge = sumOfAge({name:"Ronit", age: 21}, {name: "Jiro", age: 22});
// console.log(totalAge);