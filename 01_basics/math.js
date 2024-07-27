function add(a , b) {
    return a + b
}

// module.exports = "Khushi"
// module.exports = add


// function sub(a, b) {
//     return a - b;
// }


// module.exports = sub    // This is getting overriden.

// multiple exports
// module.exports = {
//     addFn : add, 
//     subFn : sub
// }

exports.add = (a, b) => a + b
exports.sub = (a, b) => a - b

// export default add