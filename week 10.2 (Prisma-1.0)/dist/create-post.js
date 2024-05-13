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
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.post.create({
            data: {
                title: "Last year at college",
                content: "Hey this is my new post. In this post i will be sharing the days of my college oin last year.",
                published: true,
                author: {
                    connect: {
                        id: 6
                    }
                }
            }
        });
        console.log("Created successfully!");
    });
}
main()
    .then(function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Disconnecting....");
        yield prisma.$disconnect();
    });
})
    .catch(function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    });
});
