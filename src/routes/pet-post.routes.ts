import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware'
import { requireRole } from '../middlewares/role.middleware'
import { registerPetPostController } from '../controllers/pet-post/register-pet-post.controller'
import { AppDataSource } from '../config/data-source'
import { PetPostEntity } from '../models/pet-post.entity'

const router = Router()

// Todas las rutas requieren token
router.use(authMiddleware)

// 1️⃣ Listar publicaciones reales con usuario
router.get('/', async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(PetPostEntity)
    const posts = await repo.find({ relations: ['user'] })
    return res.json(posts)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Error al obtener publicaciones' })
  }
})

// 2️⃣ Crear publicación (admin o user)
router.post(
  '/',
  requireRole('admin', 'user'),
  registerPetPostController
)

export default router
