import express from "express";
import URL from "../models/url.models.js";

const router = express.Router()


router.get('/', async(req, res) => {

    if (!req.user) return res.redirect('/user/login')

    const allURLs = await URL.find({ createdBy : req.user._id })
    return res.render('home', {urls : allURLs})

})



router.get('/signup', (req, res) => {
    return res.render('signup')
})



router.get('/user/login', (req, res) => {
    return res.render('login')
})




export default router