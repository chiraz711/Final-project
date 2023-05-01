import  Review from "../models/Review.js"
import Tour from "../models/Tour.js"


export const createReview=async(req,res)=>{
    console.log(req.body)
    const tourid=req.params.tourid
    const newreview=new Review({...req.body})
    try {
        const savedReview=await newreview.save()
        await Tour.findByIdAndUpdate(tourid,{$push:{reviews:savedReview._id}})
        res.status(200).json({success:true,message:'Review submitted',data:savedReview})
    } catch (error) {
        res.status(500).json({success:false,message:error})
        
    }
}






