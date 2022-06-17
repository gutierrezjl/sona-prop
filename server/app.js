import express from 'express'
import postRoutes from './routes/posts.routes.js'

const app = express()

//midel
app.use(express.json())
//routes
app.use(postRoutes)


export default app
