import express from "express"
import urlRoutes from "./routes/url.routes.js"
import connectToMongoDB from "./connect.js"
import URL from "./models/url.models.js"

const app = express()
const PORT = 8000

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("MongoDB Connected"))

app.use(express.json())

app.use('/url', urlRoutes)



app.get('/:shortId', async(req, res) => {

    const shortId = req.params.shortId

    const entry = await URL.findOneAndUpdate({
        shortId
    }, { 
        $push : {
            visitHistory : {
                timestamp : Date.now()
            }
        }
    })

    console.log(entry);

    res.redirect(entry.redirectURL)

})

app.listen(PORT, () => console.log("Server started at port : ", PORT))