import express from 'express'
import { createReview } from "../controllers/reviewController.js";
const router = express.Router();
import { verifyUser } from '../utils/verifyToken.js';

router.post("/:tourId",createReview );



export default router
