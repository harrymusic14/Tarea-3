import { DataSource } from 'typeorm'
import { envs } from './envs'
import { UserEntity } from '../models/user.entity'
import { PetPostEntity } from '../models/pet-post.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: envs.DATABASE_URL, // <-- Aquí debe estar
  synchronize: true,
  logging: true,
  entities: [UserEntity, PetPostEntity]
})
