import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';

const app = express()

const PORT = 8000;


// connection with mongoose
mongoose.connect('mongodb://127.0.0.1:27017/khushi-log-details')
.then(() => console.log("Mongodb Connected!"))
.catch((err) => console.log("Mongo Error : ", err))


// Schema
const userSchema = new mongoose.Schema({

    first_name : {
        type : String,
        required : true
    },

    last_name : {
        type : String,
        required : false
    },

    email : {
        type : String,
        required : true,
        unique : [true, "The email should be unique."]
    },

    gender : {
        type : String,
        required : true
    },

    job_title : {
        type : String
    }

}, {timestamps : true})


const User = mongoose.model('user', userSchema)



// Middleware
app.use(express.urlencoded({extended : false}))


app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`, (err, data) => {
        next()
    })
})


// Routes
app.get('/users', async(req, res) => {

    const allDBUsers = await User.find({})

    const html = `
        <ul>
            ${allDBUsers.map(user => `<li>${user.first_name} - ${user.email}</li>`).join(" ")}
        </ul>
    `
    res.send(html)
})


// REST API
app.get('/api/users', async(req, res) => {
    const allDBUsers = await User.find({})
    return res.json(allDBUsers)
})





app.route('/api/users/:id').get(async(req, res) => {

    const user = await User.findById(req.params.id)

    if(!user) return res.status(404).json({error : "User not found."})

    return res.json(user)

})
.patch(async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, {last_name : "Geller"})
    return res.json({status : "success"});
})
.delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({status : "deleted successfully"});
})





app.post('/api/users', async(req, res) => {
    
    const body = req.body

    if (!body || !body.first_name || !body.email || !body.gender || !body.last_name ) {
        return res.status(400).json({message : "All fields are required."})
    }

    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email,
        gender : body.gender,
        job_title : body.job_title
    })

    console.log(result);

    return res.status(201).json({message : "success"})

})



app.listen(PORT, () => {
    console.log("server started at port : ", PORT);
})