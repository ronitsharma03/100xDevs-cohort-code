import { Hono } from 'hono'

const app = new Hono()


// A simple middleware in hono
async function authMiddleware(c: any, next: any){
  // c -> context of this request, response and calling next();
  if(c.req.header("Authorization")){
    await next();
  }
  else{
    return c.text("You don't have access");
  }
}


app.post('/', authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello from Hono!")
})

export default app
