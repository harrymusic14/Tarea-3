import { UserEntity } from '../../models/user.entity'
import { AppDataSource } from '../../config/data-source'
import bcrypt from 'bcrypt'

export class RegisterUserService {
  private userRepository = AppDataSource.getRepository(UserEntity)

  async register({ name, email, password }: { name: string; email: string; password: string }) {
    const userExists = await this.userRepository.findOneBy({ email })
    if (userExists) throw new Error('El correo ya está registrado')

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      role: 'user' // Asignar rol por defect
    })

    await this.userRepository.save(user)

    return user
  }
}

