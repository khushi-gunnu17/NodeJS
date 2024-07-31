
import { getUser } from "../utils/auth.utils.js"

async function restrictToLoggedInUserOnly(req, res, next) {

    const userid = req.cookies?.uid
    // const userid = req.headers['authorization']
    // const token = userid.split("Bearer ")[1]

    // authorization based auth not working

    if (!userid) return res.redirect('/user/login')

    const user = getUser(userid)
    // const user = getUser(token)

    if (!user) return res.redirect('/user/login')
    
    req.user = user
    next()
}



async function checkAuth(req, res, next) {
    
    const userid = req.cookies?.uid

    const user = getUser(userid)
    
    req.user = user
    
    next()
}



export {
    restrictToLoggedInUserOnly, 
    checkAuth
}