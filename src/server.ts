import express from 'express'
import 'reflect-metadata'
import { AppDataSource } from './config/data-source'
import userRoutes from './routes/user.routes'
import petPostRoutes from './routes/pet-post.routes'

const app = express()
app.use(express.json())

// Montar las rutas con el prefijo /api
app.use('/api/users', userRoutes)
app.use('/api/posts', petPostRoutes)

const PORT = parseInt(process.env.PORT || '3000', 10)

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Conectado a la base de datos')
    app.listen(PORT, () =>
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    )
  })
  .catch((err) => console.error('❌ Error al conectar DB:', err))


