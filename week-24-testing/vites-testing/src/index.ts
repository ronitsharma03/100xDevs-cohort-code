import express from "express";
import { z } from "zod";
import { prismaClient } from "../src/__mocks__/index";

export const app = express();

app.use(express.json());

const bodyPayload = z.object({
  a: z.number(),
  b: z.number(),
});

//@ts-ignore
app.post("/sum", async (req, res) => {
  const payload = bodyPayload.safeParse(req.body);
  if (!payload.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = payload.data.a + payload.data.b;
  await prismaClient.sum.create({
    data: {
      a: payload.data.a,
      b: payload.data.b,
      result: answer,
    },
  });

  return res.json({
    result: answer,
  });
});

//@ts-ignore
app.get("/sum", (req, res) => {
  const parsedResponse = bodyPayload.safeParse({
    a: Number(req.headers["a"]),
    b: Number(req.headers["b"]),
  });

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  res.json({
    answer,
  });
});
