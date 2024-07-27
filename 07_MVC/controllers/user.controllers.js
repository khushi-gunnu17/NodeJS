import User from '../models/user.models.js'


async function handleGetAllUsers(req, res) {
    const allDBUsers = await User.find({})
    return res.json(allDBUsers)
}


async function getUserById(req, res) {
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({error : "User not found."})
    return res.json(user)
}


async function updateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {last_name : "Geller"})
    return res.json({status : "success"});
}


async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({status : "deleted successfully"});
}


async function handleCreateNewUser(req, res) {

    const body = req.body

    if (!body || !body.first_name || !body.email || !body.gender || !body.last_name ) {
        return res.status(400).json({message : "All fields are required."})
    }

    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email,
        gender : body.gender,
        job_title : body.job_title
    })

    console.log(result);

    return res.status(201).json({ message : "success", id : result._id })

}


export {
    handleGetAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    handleCreateNewUser
}