import express from "express";
import cluster from "cluster";
import os from "os";

const totalCpu = os.cpus().length;
const port = 3000;

if (cluster.isPrimary) {
  console.log(`Number of CPU is ${totalCpu}`);
  console.log(`Primary ${process.pid} is running...`);

  // Fork the workers
  for (let i = 0; i < totalCpu; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker with pid: ${worker.process.pid} died!`);
    console.log(`Forking another worker...`);
    const newWorker = cluster.fork();
    console.log(`New worker with pid: ${newWorker.process.pid} Forked!`);
  });
}else{
    const app = express();
    console.log(`Worker with pid: ${process.pid} started...`);

    app.get("/", (req, res) => {
        res.send("Hello world");
    });

    app.get("/api/:n", (req, res) => {
        let n = parseInt(req.params.n);
        let count = 0; 
        if(n > 5000000000) n = 5000000000;
        for(let i = 0; i <= n; i++){
            count += i;
        }

        res.send(`Final count is ${count} and pid: ${process.pid}`);
    });

    app.listen(port, () => {
        console.log(`Cluster is listening on ${port}`);
    });
}
