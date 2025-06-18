import { AppDataSource } from '../../config/data-source'
import { UserEntity } from '../../models/user.entity'

export class FinderUserService {
  private userRepository = AppDataSource.getRepository(UserEntity)

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.userRepository.findOneBy({ email })
    return user
  }
}

