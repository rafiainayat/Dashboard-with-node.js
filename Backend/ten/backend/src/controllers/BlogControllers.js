import { uploadImg } from "../config/cloudinary.js";


const CreateBlog =async (req,res) => {
    try {
        console.log('req.user---->',req.user)
 console.log(req.body);


const check = await uploadImg(req.file)
console.log('check--->',check);

        
    } catch (error) {
        
    }
 
 
 
}

export  {CreateBlog}