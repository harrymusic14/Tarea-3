import { Request, Response } from 'express'
import { RegisterUserService } from '../services/user/register-user.service'

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    const registerService = new RegisterUserService()
    const user = await registerService.register({ name, email, password })

    res.status(201).json({ message: 'Usuario registrado correctamente', user })
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}
