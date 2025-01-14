import { createRoute, OpenAPIHono } from '@hono/zod-openapi'
import paramSchema from './inputs';
import userSchema from './outputs';
import { swaggerUI } from '@hono/swagger-ui';


const app = new OpenAPIHono();
app.get('/', (c) => {
  return c.text('Hello Hono!')
});

const getUserRoute = createRoute({
  method: 'get',
  path: '/user/{id}',
  request: {
    params: paramSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: userSchema,
        }
      },
      description: 'Get the user details'
    }
    
  }
});

app.openapi(getUserRoute, (c) => {
  const { id } = c.req.valid('param');
  return c.json({
    id,
    age: 20,
    name: "Iroon man"
  })
});

// the OpenAPI documentation will be available at /doc

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: "My API"
  },
});

app.get('/ui', swaggerUI({ url: '/doc'}));

export default app
