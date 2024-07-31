
// const sessionIdToUserMap = new Map()


// function setUser(id, user) {
//     sessionIdToUserMap.set(id, user)
// }


// function getUser(id) {
//     return sessionIdToUserMap.get(id)    
// }


// export {
//     setUser,
//     getUser
// }




import jwt from "jsonwebtoken"
const secretKey = 'khushi@123$5'


function setUser(user) {
    return jwt.sign({
        _id : user._id,
        email : user.email
    }, secretKey)
}


function getUser(token) {

    if (!token) return null

    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        return null
    }
}


export {
    setUser,
    getUser
}