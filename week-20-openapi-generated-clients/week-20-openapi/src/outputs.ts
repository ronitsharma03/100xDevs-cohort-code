import { z } from '@hono/zod-openapi';


const userSchema = z.object({
    id: z.string().min(3).openapi({
        example: '123',
    }),
    name: z.string().openapi({
        example: 'John Doe',
    }),
    age: z.number().openapi({
        example: 21
    }),
}).openapi('User'); // maybe giving it an alias

export default userSchema;