import express from "express"

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.json({message : `Hello from the server ${process.pid}`})
})

app.listen(PORT, (req, res) => {
    console.log(`Server started at the port : ${PORT}`);
})