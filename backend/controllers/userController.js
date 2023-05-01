import User  from "../models/User.js"
// const verifyUser=require('../utils/verifyToken')

export const createUser = async (req,res,next)=>{
    const newUser=new User(req.body)

    try {
      const savedUser = await newUser.save()
      res.status(200).json({success:true,message:'Successufully created',data:savedUser});
    } catch (err) {
        res.status(500).json({success:false,message:'Failed to create'});
      
    }
  } 

export const updateUser = async (req,res,next)=>{
  const id=req.params.id
  try {
    const updatedUser = await User.findByIdAndUpdate(id,{ $set:req.body },{new:true }
    );
    res.status(200).json({success:true,message:'Successfully updated',data:updatedUser})
  } catch (err) {
    res.status(500).json({success:false,message:'failed to update'}) 
  }
}

export const deleteUser = async (req,res,next)=>{
    const id=req.params.id
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({success:true,message:'Successfully deleted'})
  } catch (err) {
    res.status(500).json({success:false,message:'failed to delete'})
  }
}

export const getSingleUser = async  (verifyUser,req,res,next)=>{
    const id=req.params.id
  try {
    const user = await User.findById(id);
    res.status(200).json({success:true,message:'Successfully',data:user})
  } catch (err) {
    res.status(404).json({success:false,message:'not found'})
  }
}

export const getAllUser = async (req,res,next)=>{
  try {
    const users = await User.find({});
    res.status(200).json({success:true,message:'Successfully',data:users})
  } catch (err) {
    res.status(404).json({success:false,message:'not found'})
  }
}