import { Request, Response } from 'express'
import { RegisterUserService } from '../services/user/register-user.service'

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const service = new RegisterUserService()
      const user = await service.register(req.body)
      res.status(201).json(user)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }
}
