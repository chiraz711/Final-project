import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
const router=express.Router()
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

router.get('/:id',verifyUser,getSingleUser)
router.get('/',verifyAdmin,getAllUser)
router.put('/:id',verifyUser,updateUser)
router.delete('/:id',verifyUser,deleteUser)
router.post('/adduser',createUser)

export default router 