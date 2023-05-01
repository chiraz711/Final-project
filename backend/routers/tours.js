import express from 'express'
const router=express.Router()
import { createTour,updateTour,deleteTour,getSingleTour,getAllTour,getTourBySearch,getFeaturedTour,getTourCount}  from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

 
router.post('/',createTour)
router.put('/:id',updateTour)
router.delete('/:id',deleteTour)
router.get('/:id',getSingleTour)
router.get('/',getAllTour)
router.get('/search/getTourBySearch',getTourBySearch)
router.get('/search/getFeaturedTours',getFeaturedTour)
router.get('/search/getTourCount',getTourCount)

export default router  