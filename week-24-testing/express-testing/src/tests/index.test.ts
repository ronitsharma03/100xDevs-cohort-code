import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import { app } from '../index';

describe("Testing POST /sum", () => {
    it("Should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(3);
    });
});