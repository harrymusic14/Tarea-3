import express from 'express'
import userRoutes from './routes/user.routes'
import { AppDataSource } from './config/data-source'

const app = express()

app.use(express.json())
app.use('/users', userRoutes)

const PORT = parseInt(process.env.PORT || '3000', 10)

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Conectado a la base de datos')
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`))
  })
  .catch((err) => console.error(err))

