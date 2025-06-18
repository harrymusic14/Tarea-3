import { Request, Response } from 'express'
import { LoginUserService } from '../services/user/login-user.service'

export const loginUserController = async (req: Request, res: Response) => {
  console.log('🎯 Entró al loginUserController') // <--- Agrega esto

  try {
    const { email, password } = req.body
    const service = new LoginUserService()
    const { token, user } = await service.login({ email, password })

    res.status(200).json({
      message: 'Login exitoso',
      token,
      user: { id: user.id, email: user.email, role: user.role }
    })
  } catch (error: any) {
    res.status(401).json({ message: error.message })
  }
}
