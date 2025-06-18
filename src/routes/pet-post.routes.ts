import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware'
import { requireRole } from '../middlewares/role.middleware'
import { registerPetPostController } from '../controllers/pet-post/register-pet-post.controller'

const router = Router()

// Todas las rutas requieren token
router.use(authMiddleware)

// Ruta accesible solo a usuarios autenticados
router.get('/', (req, res) => res.send('Ruta protegida: obtener publicaciones'))

// Ruta accesible solo a administradores
router.post('/', requireRole('admin'), registerPetPostController)

export default router
