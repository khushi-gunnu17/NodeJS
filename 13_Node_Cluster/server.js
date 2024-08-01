import cluster from "node:cluster"
import os from "os"
import express from "express"

const totalCPUs = os.cpus().length
// const totalCPUs = os.availableParallelism   // same as above

if (cluster.isPrimary) {

    console.log(`Primary ${process.pid} is running.`);

    for (let i=0 ; i<totalCPUs; i++) {
        cluster.fork()
    }

} else {

    const app = express()
    const PORT = 8000

    app.get('/', (req, res) => {
        res.json({message : `Hello from the server ${process.pid}`})
    })

    app.listen(PORT, (req, res) => {
        console.log(`Server started at the port : ${PORT}`);
    })

}