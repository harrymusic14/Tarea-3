import { AppDataSource } from '../../config/data-source'
import { PetPostEntity } from '../../models/pet-post.entity'

export const listPetPostsService = async () => {
  const petPostRepository = AppDataSource.getRepository(PetPostEntity)

  const posts = await petPostRepository.find({
    relations: ['user'], // ← Esto incluye los datos del usuario
    select: {
      id: true,
      title: true,
      description: true,
      location: true,
      isApproved: true,
      user: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    }
  })

  return posts
}
