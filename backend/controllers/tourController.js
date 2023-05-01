import Tour  from "../models/Tour.js"

export const createTour=async(req,res)=>{
    const newTour=new Tour(req.body)
    // console.log(req.body)
    try {
        const savedTour=await newTour.save()
        res.status(200).json({success:true,message:'Succefully created',data:savedTour})
        console.log(data)
    } catch (err) {
        res.status(500).json({success:false,message:err})       
    }
}

export const updateTour=async(req,res)=>{
    const id=req.params.id
    try {
        const updateTour=await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:'Successfully updated',data:updateTour})
    } catch (err) {
        res.status(500).json({success:false,message:'failed to update. Try again'}) 
    }
}

export const deleteTour=async(req,res)=>{
    const id=req.params.id
     try {
        await Tour.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Successfully deleted'})
    } catch (err) {
        res.status(500).json({success:false,message:'failed to delete'})    
    }
}

export const getSingleTour=async(req,res)=>{
    const id=req.params.id
    try {
      const tour = await Tour.findById(id);
      res.status(200).json({success:true,message:'Successfully',data:tour})
    } catch (err) {
        res.status(404).json({success:false,message:'not found'})
    }
}

export const getAllTour=async(req,res)=>{ 
    const page=parseInt(req.query.page);   
    try {
        const tours=await Tour.find({}).populate('reviews').skip(page * 8).limit(8)
        res.status(200).json({success:true,count:tours.length,message:'Successfully',data:tours})
    } catch (error) {
        res.status(404).json({success:false,message:'not found'})
    }
}

export const getTourBySearch=async(req,res)=>{

    const city=new RegExp(req.query.city,'i')
    const distance=parseInt(req.query.distance)
    const maxGroupSize=parseInt(req.query.maxGroupSize)
    try {
        //gte means greater than equal
        const tours=await Tour.find({city,distance:{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize} }).populate("reviews")        
        res.status(200).json({success:true,message:'successful',data:tours})     
    } catch (err) {
        res.status(404).json({success:false,message:'not found'})
    }
}


export const getFeaturedTour=async(req,res)=>{
   
    try {
        const tours=await Tour.find({featured:true}).populate('reviews').limit(8)
        res.status(200).json({success:true,message:'successful',data:tours})
        
    } catch (error) {
        res.status(404).json({success:false,message:'not found'})
    }
}

export const getTourCount=async(req,res)=>{
    try {
        const tourCount=await Tour.estimatedDocumentCount()
        res.status(200).json({success:true,data:tourCount})
        
    } catch (error) {
        res.status(404).json({success:false,message:'not found'})
    }
}







