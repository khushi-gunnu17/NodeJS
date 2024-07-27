// File Handling

const fs = require("fs")
const os = require("os")

// console.log(fs)

// sync
// fs.writeFileSync('./01_basics/text.txt', 'Hello Text File.')

// async
// fs.writeFile('./01_basics/textAsync.txt', 'Hello Text File.', (err) => {})





// const result = fs.readFileSync('./01_basics/contacts.txt', "utf-8")
// console.log(result);


// async, same result as above
// fs.readFile('./01_basics/contacts.txt', "utf-8", (err, result) => {
//     if (err) {
//         console.log("error : ", err);
//     } else {
//         console.log(result);
//     }
// })

// asynchronous task needs to be given a callback, handle the error and doesn't return anything







// fs.appendFileSync('./01_basics/text.txt', new Date().getDate().toLocaleString())
// fs.appendFileSync('./01_basics/text.txt', `${Date.now()} Hi\n`)



// copying a file
// fs.cpSync("./01_basics/text.txt", "./01_basics/copy.txt")



// deleting a file
// fs.unlinkSync('./01_basics/copy.txt')





// get the stats on a file
// console.log(fs.statSync("./01_basics/contacts.txt"))
// console.log(fs.statSync("./01_basics/contacts.txt").isFile())





// recursively creates a folder inside a folder.
// fs.mkdirSync('docs/a/b', {recursive : true})



// fs.renameSync("docs", "02_basics")









// console.log('1');
// // Blocking...
// const result = fs.readFileSync('./01_basics/contacts.txt', "utf-8")
// console.log(result);
// console.log('2');









// console.log('1');

// // Non Blocking...
// fs.readFile('./01_basics/contacts.txt', "utf-8", (err, result) => {
//     if (err) {
//         console.log("error : ", err);
//     } else {
//         console.log(result);
//     }
// })

// console.log('2');

// Default Thread pool size is 4
// Max? = 8core cpu = 8 threads





// the number of threads in your system
console.log(os.cpus().length)