const http = require("http")
const fs = require("fs")
const url = require('url')


const server = http.createServer((req, res) => {


    if (req.url === '/favicon.ico') return res.end();


    const myUrl = url.parse(req.url, true)      // true for parsing the query parameters
    console.log(myUrl);


    const log = `${Date.now()} : ${req.method} ${req.url} New Req Received\n`

    fs.appendFile('./log.txt', log, (err, data) => {

        switch (myUrl.pathname) {
            case '/':
                if (req.method === 'GET') res.end('Hello from Home Page.')
                break;

            case '/signup':
                if (req.method === 'GET') res.end('Hello from Signup Page.');
                else if (req.method === 'POST') {
                    // DB Query
                    res.end("Success.")
                }
                break;
        
            default:
                res.end('404 Not Found')
                break;
        }
        
    })
    
})

server.listen(8000, () => console.log("server started!"))