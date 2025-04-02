import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "../index";
import { prismaClient } from "../db";

vi.mock('../db');

describe("Testing the addition functionality", () => {
  it("POST /sum", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 4,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  it("Should return  the sum of given two values", async () => {
    const res = await request(app)
      .post("/sum")
      .send({
        a: ["aqww"],
      });

    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe("Incorrect inputs");
  });
});
