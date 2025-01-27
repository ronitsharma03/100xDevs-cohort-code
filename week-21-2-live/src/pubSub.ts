import { createClient, RedisClientType } from 'redis';

export class PubSubManager {
    private static instance: PubSubManager;
    private redisClient: RedisClientType;
    private subscriptions: Map<string, string[]>;


    private constructor(){
        this.redisClient = createClient();
        this.redisClient.connect();
        this.subscriptions = new Map();
    }

    public static getInstance(): PubSubManager {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    public adduserToStock(userId: string, stock: string){
        if(!this.subscriptions.has(stock)){
            this.subscriptions.set(stock, []);
        }
        this.subscriptions.get(stock)?.push(userId);

        if(this.subscriptions.get(stock)?.length === 1){
            this.redisClient.subscribe(stock, (message) => {
                this.handleMessage(stock, message);
            });
            console.log("Subscribed to the Redis channel: ", stock);
        }
    }

    public userUnsubscribe(userId: string, stock: string){
        this.subscriptions.set(stock, this.subscriptions.get(stock)?.filter((subs) => subs != userId) || []);
        if(this.subscriptions.get(stock)?.length === 0){
            this.redisClient.unsubscribe(stock);
            console.log(`Unsubscribed to redis channel ${stock}`);
        }
    }

    private handleMessage(stock: string, message: string){
        console.log(`Message received from the channel ${stock}: ${message}`);
        this.subscriptions.get(stock)?.forEach((sub) => {
            console.log(`Sendinig message to ${sub} for ${stock}`);
        })
    }

    public async disconnect(){
        await this.redisClient.quit();
    }

}