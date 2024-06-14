"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const totalAge = sumOfAge({ name: "Ronit", age: 21 }, { name: "Jiro", age: 22 });
console.log(totalAge);
