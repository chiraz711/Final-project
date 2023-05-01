import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectdb from './config/dbconfig.js'

const port=4555
dotenv.config()
const app=express()
const corsOptions={
    origin:true,
    credentials:true
}
import tourrouter from './routers/tours.js'
import userrouter from './routers/users.js'
import authrouter from './routers/auth.js'
import reviewrouter from './routers/reviews.js'
import bookrouter from './routers/bookings.js'





//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.use("/api/v1/tours",tourrouter)
app.use("/api/v1/users",userrouter)
app.use("/api/v1/auth",authrouter)
app.use("/api/v1/review",reviewrouter)
app.use("/api/v1/booking",bookrouter)


app.listen(port,()=>{
    connectdb()
    console.log('server connected')
})


