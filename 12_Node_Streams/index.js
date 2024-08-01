import express from "express"
import status from "express-status-monitor"
import fs from "fs"
import zlib from "zlib"

const app = express()

const PORT = 8000

app.use(status())


// read sample.txt (stream) --> zipper --> fs write stream
// file is getting stored as a zip in the form of streaming, thus no memory usage of ours

fs.createReadStream('./sample.txt').pipe(
    zlib.createGzip().pipe(
        fs.createWriteStream('./sample.zip')
    )
)


app.get('/', (req, res) => {
    const stream = fs.createReadStream('./sample.txt', 'utf-8')
    stream.on('data', (chunk) => res.write(chunk))
    stream.on('end', () => res.end())
})

app.listen(PORT, (req, res) => {
    console.log(`Server started at Port : ${PORT}`);
})