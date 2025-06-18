import { Request, Response } from 'express'
import { registerPetPostService } from '../../services/pet-post/register-pet-post.service'

export const registerPetPostController = async (req: Request, res: Response) => {
  try {
    const newPost = await registerPetPostService(req)
    res.status(201).json(newPost)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}