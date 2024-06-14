// Zod inference
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type zodSchemaType = z.infer<typeof userProfileSchema>; // this becomes crucial when the backend code needs to 
// be used at the frontends


app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: zodSchemaType = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);

interface User {
    id: number;
    password: string;
    name: string;
    age: number;
};

function sumOfAge(user1: User, user2: User): number {
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

// Readonly
interface Config {
    endPoint: string;
    apiKey: string;
};

const configuration: Readonly<Config> = {
    endPoint: "https://www.google.com",
    apiKey: "kjwnhf430934joi"
};

// configuration.endPoint = ""  // this will throw an error

// Records
interface User1 {
    id: string;
    name: string;
}

type Users = Record<string, User1>;

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


//Map
interface User2 {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User2>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


// Exclude
type event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK


// const totalAge = sumOfAge({name:"Ronit", age: 21}, {name: "Jiro", age: 22});
// console.log(totalAge);