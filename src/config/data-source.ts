import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { UserEntity } from '../models/user.entity'
import { PetPostEntity } from '../models/pet-post.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pollo1245',
  database: 'tarea2',
  synchronize: true,
  logging: true,
  entities: [UserEntity, PetPostEntity],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Conectado a la base de datos')
  })
  .catch((error) => console.error('Error al conectar la base de datos', error))
