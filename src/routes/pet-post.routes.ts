import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware'
import { requireRole } from '../middlewares/role.middleware'

const router = Router()

// Todas las rutas requieren token
router.use(authMiddleware)

// Ruta accesible solo a usuarios autenticados
router.get('/', (req, res) => res.send('Ruta protegida: obtener publicaciones'))

// Ruta accesible solo a administradores
router.post('/', requireRole('admin'), (req, res) =>
  res.send('Ruta protegida SOLO para ADMIN: crear publicación')
)

export default router
