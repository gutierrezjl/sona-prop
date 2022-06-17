import { connectDB } from './db.js'
import { PORT } from './config.js'
import app from './app.js'

connectDB() //ejecuto db

app.listen(PORT)
console.log('Server sona prop escuchando en puerto', PORT)
