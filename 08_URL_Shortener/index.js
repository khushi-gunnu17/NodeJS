import express from "express"
import urlRoutes from "./routes/url.routes.js"
import connectToMongoDB from "./connect.js"
import URL from "./models/url.models.js"
import staticRouter from './routes/staticRouter.js'
import path from "path"

const app = express()
const PORT = 8000

connectToMongoDB('mongodb://localhost:27017/short-url-service')
.then(() => console.log("MongoDB Connected"))

app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.set('view engine', 'ejs')
app.set("views", path.resolve('./views'))


app.use("/", staticRouter)


app.use('/urls', urlRoutes)


app.get('/views/test', async(req, res) => {

    const allURLs = await URL.find({})

    res.end(`
        <html>
            <head></head>
            <body>
                <ol>
                    ${allURLs.map(url => `<li>${url.shortId} - ${url.redirectURL} - ${url.visitHistory.length} </li>`).join(" ")}
                </ol>
            </body>
        </html>  
    `)
})


app.get('/urls/:shortId', async(req, res) => {

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