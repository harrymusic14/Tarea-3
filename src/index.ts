import express from 'express'
import 'reflect-metadata'
import { AppDataSource } from './config/data-source'
import userRoutes from './routes/user.routes'
import petPostRoutes from './routes/pet-post.routes'

const app = express()
app.use(express.json())

// Montar las rutas
app.use('/api/users', userRoutes)
app.use('/api/posts', petPostRoutes)

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Base de datos conectada')

    app.listen(3000, () => {
      console.log('🚀 Servidor corriendo en el puerto 3000')
    })
  })
  .catch(error => console.error('Error al conectar la base de datos:', error))
