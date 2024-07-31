import express from "express";
import path from "path"
import multer from "multer";

const app = express()
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended : false}))


const storage = multer.diskStorage({

    destination : function(req, file, cb) {
        return cb(null, './uploads')
    },

    filename : function(req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})


const upload = multer({storage})


app.get("/", (req, res) => {
    return res.render("homepage")
})


// can give various options such as single, array instead of fields
app.post("/upload", upload.fields([{name : 'profileImage'}, {name : "coverImage"}]), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/")
})


app.listen(PORT, () => console.log("Server started at port : ", PORT))