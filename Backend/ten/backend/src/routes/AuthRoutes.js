import express from "express";
import { addUser, allUsers, deleteUser, getUser, loginUser, logout, updateUser } from "../controllers/AuthControllers.js";

import { userCheck } from "../middlewares/Authmiddle.js";
import { adminMiddlware, userMiddlware } from "../middlewares/Adminmiddle.js";

const authroute = express.Router()



authroute.post('/user',addUser)
authroute.post('/login',loginUser)
authroute.get('/logout',logout)
authroute.get('/getuser',userCheck,allUsers)
authroute.get('/user/:id',userCheck,getUser)
authroute.put('/user/:id',updateUser)
authroute.delete('/user/:id',deleteUser)    

// authroute.getuSER('/user',addUser)


export default authroute