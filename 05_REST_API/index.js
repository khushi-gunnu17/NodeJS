import express from 'express';
import users from './MOCK_DATA.json' assert { type: 'json' };
import fs from 'fs';

const app = express()

const PORT = 8000;


// Middleware
app.use(express.urlencoded({extended : false}))


app.use((req, res, next) => {
    console.log("Hello from middleware 1.");
    req.myusername = "Khushi_gunnu"
    fs.appendFile('log.txt', `\n${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`, (err, data) => {
        next()
    })
    // return res.json({message : "Hello 1."})
    // next()
})


app.use((req, res, next) => {
    console.log("Hello from middleware 2.", req.myusername);
    // db query
    // credit card info
    req.creditCardNumber = '123'
    // return res.json({message : "Hello 2."})
    next()
})



// Routes
app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${map(user => `<li>${user.first_name}</li>`).join(" ")}
        </ul>
    `
    res.send(html)
})


// REST API
app.get('/api/users', (req, res) => {
    // console.log("I am in get route", req.myusername);
    res.setHeader('X-MyName', 'Khushi Sharma')       // custom header, always add X to custom headers
    // console.log(req.headers);
    return res.json(users)
})


// Dynamic path parameters
app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    if(!user) return res.status(404).json({error : "User not found."})
    return res.json(user)
})
.patch((req, res) => {
    // Edit the user with id
    return res.json({status : "pending"});
})
.delete((req, res) => {
    // Delete the user with id
    return res.json({status : "pending"});
})



app.post('/api/users', (req, res) => {
    
    const body = req.body

    if (!body || !body.first_name || !body.email || !body.gender || !body.last_name ) {
        return res.status(400).json({message : "All fields are required."})
    }

    users.push({id: users.length + 1, ...body})

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({status : "success", id: users.length});
    })

})



app.listen(PORT, () => {
    console.log("server started at port : ", PORT);
})