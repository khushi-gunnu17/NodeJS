import express from "express";
import URL from "../models/url.models.js";

const router = express.Router()


router.get('/', async(req, res) => {

    const allURLs = await URL.find({})
    return res.render('home', {urls : allURLs})

})


export default router