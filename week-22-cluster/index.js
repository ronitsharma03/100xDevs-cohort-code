"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const totalCpu = os_1.default.cpus().length;
const port = 3000;
if (cluster_1.default.isPrimary) {
    cluster_1.default.schedulingPolicy = cluster_1.default.SCHED_RR;
    console.log(`Number of CPU is ${totalCpu}`);
    console.log(`Primary ${process.pid} is running...`);
    // Fork the workers
    for (let i = 0; i < totalCpu; i++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on('exit', (worker, code, signal) => {
        console.log(`Worker with pid: ${worker.process.pid} died!`);
        console.log(`Forking another worker...`);
        const newWorker = cluster_1.default.fork();
        console.log(`New worker with pid: ${newWorker.process.pid} Forked!`);
    });
}
else {
    const app = (0, express_1.default)();
    console.log(`Worker with pid: ${process.pid} started...`);
    app.get("/", (req, res) => {
        res.send("Hello world");
    });
    app.get("/api/:n", (req, res) => {
        let n = parseInt(req.params.n);
        let count = 0;
        if (n > 5000000000)
            n = 5000000000;
        for (let i = 0; i <= n; i++) {
            count += i;
        }
        res.send(`Final count is ${count} and pid: ${process.pid}`);
    });
    app.listen(port, () => {
        console.log(`Cluster is listening on ${port}`);
    });
}
