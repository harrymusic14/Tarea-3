import { Router } from 'express'
import { registerUserController } from '../controllers/registerUser.controller'

const router = Router()

router.post('/register', registerUserController)

export default router
