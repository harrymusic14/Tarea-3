import { AppDataSource } from '../../config/data-source'
import { UserEntity } from '../../models/user.entity'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'secreto123'

export class LoginUserService {
  private userRepository = AppDataSource.getRepository(UserEntity)

  async login({ email, password }: { email: string; password: string }) {
    const user = await this.userRepository.findOneBy({ email })
    if (!user) throw new Error('Correo o contraseña incorrectos')

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new Error('Correo o contraseña incorrectos')

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      SECRET,
      { expiresIn: '1d' }
    )

    return { token, user }
  }
}
