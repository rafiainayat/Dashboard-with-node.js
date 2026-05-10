import express from "express";

import { userCheck } from "../middlewares/Authmiddle.js";
import { CreateBlog } from "../controllers/BlogControllers.js";
import multer from 'multer' 

const blogroute = express.Router()

const upload = multer({
    storage:multer.memoryStorage(),
     limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
    
  }
})

blogroute.post('/create',userCheck,upload.single('image'),CreateBlog)

// authroute.getuSER('/user',addUser)


export default blogroute