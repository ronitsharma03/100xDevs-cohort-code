import { PubSubManager } from "./pubSub";

setInterval(() => {
    PubSubManager.getInstance().adduserToStock(Math.random().toString(), "APPLE");
}, 4000);