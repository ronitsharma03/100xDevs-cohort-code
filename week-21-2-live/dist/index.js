"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubSub_1 = require("./pubSub");
setInterval(() => {
    pubSub_1.PubSubManager.getInstance().adduserToStock(Math.random().toString(), "APPLE");
}, 4000);
