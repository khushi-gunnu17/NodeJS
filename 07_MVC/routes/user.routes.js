import express from "express";
import { handleGetAllUsers, getUserById, updateUserById, deleteUserById, handleCreateNewUser } from "../controllers/user.controllers.js"

const router = express.Router()


router.route('/')
.get(handleGetAllUsers)
.post(handleCreateNewUser)


router.route('/:id').get(getUserById)
.patch(updateUserById)
.delete(deleteUserById)


export default router
// module.exports = router