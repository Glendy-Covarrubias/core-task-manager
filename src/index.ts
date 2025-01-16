import express from 'express'
import cors from 'cors'
import tasksRoutes from './routes/tasksRoutes'
import sequelize from './database/db'
import Task from './models/Task'
import User from './models/User'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middlewares
app.use(express.json())

const PORT = process.env.PORT ?? 3000

/* app.use(cors({
  origin: '*',
  allowedHeaders: ['X-Requested-With', 'Access-Control-Allow-Headers']
})) */

app.use(cors({
  origin: process.env.URL_DEV_FRONTEND,
  credentials: true
}))

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api', tasksRoutes)

async function main (): Promise<void> {
  try {
    await sequelize.sync({ alter: false })

    await User.sync({ alter: false })
    await Task.sync({ alter: false })

    console.log(`Server running on port ${PORT}`)
    console.log('Connection has been established successfully.')
    app.listen(PORT)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main().catch(error => {
  console.error('Error in main function:', error)
})
