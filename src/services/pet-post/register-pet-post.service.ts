import { Request } from 'express'
import { AppDataSource } from '../../config/data-source'
import { PetPostEntity } from '../../models/pet-post.entity'
import { UserEntity } from '../../models/user.entity'

export const registerPetPostService = async (req: Request) => {
  const { title, description, location } = req.body

  const userId = (req.user as UserEntity).id 

  const userRepository = AppDataSource.getRepository(UserEntity)
  const petPostRepository = AppDataSource.getRepository(PetPostEntity)

  const user = await userRepository.findOneBy({ id: userId })
  if (!user) throw new Error('Usuario no encontrado')

  const newPost = petPostRepository.create({
    title,
    description,
    location,
    user
  })

  await petPostRepository.save(newPost)
  return newPost
}

