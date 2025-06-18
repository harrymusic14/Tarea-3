import { Router } from 'express'
import { registerUserController } from '../controllers/registerUser.controller'
import { loginUserController } from '../controllers/loginUser.controller'
import { authMiddleware } from '../middlewares/auth.middleware'

const router = Router()

// Ruta de prueba (para verificar si las rutas están activas)
router.get('/check', (req, res) => {
  res.send('Ruta de usuarios activa ✅')
})
// Rutas públicas
router.post('/register', registerUserController)
router.post('/login', loginUserController)

// Middleware de autenticación para rutas protegidas
router.use(authMiddleware)

// Rutas protegidas de ejemplo
router.get('/', (req, res) => res.send('Ruta protegida: lista de usuarios'))

export default router
