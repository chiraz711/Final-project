import mongoose from "mongoose"
 const connectdb =async ()=>{
    try {
      await mongoose.connect(process.env.databse)
       console.log('database is connect')
    } catch (err) {
       console.log('database is not connected')
    }
}

export default connectdb