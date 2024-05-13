"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ['info', 'query']
});
// select * form questions offset 0 limit10; -> shows the questions from 0 till 10
// select * form questions offset 10 limit20; -> 10 - 20
// select * form questions offset 20 limit30; -> 20 - 30
// SQL query for pagination
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield prisma.user.findMany({
            take: 2, // -> take only 3 at a time -> works like limit;
            skip: 2 // -> And skip 10 -> works like offset;
        });
        console.log(response);
    });
}
main();
