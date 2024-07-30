import User from "../models/user.models.js"
import { v4 as uuidv4 } from 'uuid';
import { setUser, getUser } from "../utils/auth.utils.js";

async function handleUserSignup(req, res) {

    const { username, email, password } = req.body

    await User.create({
        username, 
        email,
        password
    })

    return res.redirect('/')

}



async function handleUserLogin(req, res) {

    const {email, password} = req.body

    const user = await User.findOne({email, password})

    if (!user) {
        return res.render('login', {
            error : "Invalid credentials"
        })
    }

    const sessionId = uuidv4()
    setUser(sessionId, user)

    res.cookie("uid", sessionId)

    return res.redirect('/')

}



export {
    handleUserSignup,
    handleUserLogin
}