import mongoose from "mongoose";

async function connectMongoDB (url) {
    return mongoose.connect(url)
    .then(() => console.log("Mongodb Connected!"))
    .catch((err) => console.log("Mongo Error : ", err))
}

export default connectMongoDB