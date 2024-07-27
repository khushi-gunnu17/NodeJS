const express = require('express')

const app = express()


app.get('/', (req, res) => {
    return res.send("Hello from Home Page.")
})

app.get('/about', (req, res) => {
    return res.send("Hello from About Page" + " Hey! " + req.query.name)
})

const port = 8000

app.listen(port, () => {
    console.log("The server is listening on the port : ", port)
})