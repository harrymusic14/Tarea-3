import { Router } from 'express'
import publicRoutes from './public.routes'
import userRoutes from './user.routes'
import petPostRoutes from './pet-post.routes'

const router = Router()

router.use(publicRoutes) // ← aquí están /register y /login
router.use('/users', userRoutes)
router.use('/posts', petPostRoutes)

export default router
