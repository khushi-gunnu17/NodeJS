const http = require("http")
const fs = require("fs")
const url = require('url')

// console.log(http);


const server = http.createServer((req, res) => {
    // console.log("New request received.");
    // console.log(req);


    if (req.url === '/favicon.ico') return res.end();


    const myUrl = url.parse(req.url, true)      // true for parsing the query parameters
    console.log(myUrl);


    const log = `${Date.now()} : ${req.url} New Req Received\n`

    fs.appendFile('./log.txt', log, (err, data) => {

        switch (myUrl.pathname) {
            case '/':
                res.end('Hello from Home Page.')
                break;

            case '/about':
                const username = myUrl.query.name
                const searchParam = myUrl.query.search
                res.end(`Hi, ${username} and ${searchParam}`)
                // res.end('Hello from About Page.')
                break;

            case '/search':
                const search = myUrl.query.search_query
                res.end(`Here are your results for : ${search}`)
                break;
        
            default:
                res.end('404 Not Found')
                break;
        }
        
    })
    
})

server.listen(8000, () => console.log("server started!"))