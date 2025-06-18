import express from 'express'
import { AppDataSource } from './config/postgres-database'
import { envs } from './config/envs'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.send('API funcionando')
})

export { app }
