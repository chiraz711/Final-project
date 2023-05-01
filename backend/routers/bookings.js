import express from 'express'
import { createBooking, getBooking,getAllBooking } from "../controllers/bookingController.js";
const router = express.Router();
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

router.post("/",createBooking );
router.get("/",getAllBooking);
router.get("/:id",verifyUser,getBooking);



export default router
