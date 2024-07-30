import express from "express";
import URL from "../models/url.models.js";

const router = express.Router()


router.get('/', async(req, res) => {

    // if (!req.user) return res.redirect('/user/login')

    const allURLs = await URL.find({  })
    return res.render('home', {urls : allURLs})

})



router.get('/signup', async(req, res) => {
    return res.render('signup')
})



router.get('/user/login', async(req, res) => {
    return res.render('login')
})




export default router