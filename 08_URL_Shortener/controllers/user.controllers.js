import User from "../models/user.models.js"
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../utils/auth.utils.js";

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

    // const sessionId = uuidv4()
    // setUser(sessionId, user)

    // res.cookie("uid", sessionId)
    
    const token = setUser(user)
    res.cookie("uid", token)       // could give more options here, like domain, expiry
    
    // res.json({token})
    return res.redirect('/')

}



export {
    handleUserSignup,
    handleUserLogin
}