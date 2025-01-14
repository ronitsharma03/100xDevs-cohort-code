import { z } from '@hono/zod-openapi';


const paramSchema = z.object({
    id: z.string().min(3).openapi({
        param: {
            name: 'id',
            in: 'path'
        },
        example: '123123'
    }),
});

export default paramSchema;