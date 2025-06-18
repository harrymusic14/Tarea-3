import { Router } from 'express'
import { registerUserController } from '../controllers/registerUser.controller'
import { loginUserController } from '../controllers/loginUser.controller'
import { authMiddleware } from '../middlewares/auth.middleware'

const router = Router()

// Rutas públicas
router.get('/check', (req, res) => res.send('Ruta de usuarios activa ✅'))
router.post('/register', registerUserController)
router.post('/login', loginUserController)

// Rutas protegidas
router.use(authMiddleware)
router.get('/', (req, res) => res.send('Ruta protegida: lista de usuarios'))

export default router
