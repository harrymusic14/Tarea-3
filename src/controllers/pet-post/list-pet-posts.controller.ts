import { Request, Response } from 'express'
import { listPetPostsService } from '../../services/pet-post/list-pet-posts.service'

export const listPetPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await listPetPostsService()
    res.json(posts)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
