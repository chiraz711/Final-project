import bcrypt from "bcrypt"
import  jwt from "jsonwebtoken"
import User from '../models/User.js'

export const register=async(req,res)=>{
  try {
    const salt=bcrypt.genSaltSync(10)
    const hash=bcrypt.hashSync(req.body.password,salt)
    
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        role:req.body.role,
        password:hash,
        photo:req.body.photo
    })
       await newUser.save() 
       res.status(200).json({success:true,message:'Successfully created'}); 
    
  } catch (err) {
      res.status(500).json({success:false,message:'Failed to create,try again'})
  }
}


export const login=async(req,res)=>{
  const email= req.body.email
  
  try {
        const user = await User.findOne({email})

            if(!user ){
            return res.status(404).json({success:false,message:'User not found'});
             }

           const match =await  bcrypt.compare(req.body.password,user.password)
           
          if(!match){
            return res.status(401).json({success:false,message:'Incorrect'});
          }
          const {password,role,...rest}=user._doc
          //create token
          const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.SecretorKey,
            {expiresIn:"15d"})
          
          res.cookie('accessToken',token,
          {
            httpOnly:true,
            expires:token.expiresIn
          }).status(200).json({
            token,
            data:{...rest},
            role,
          });
          
    
  } catch (err) {
    res.status(500).json({success:false,message:'Failed to login'})
  }
};