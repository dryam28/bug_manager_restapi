import 'dotenv/config'
//DB
import './models/User.js'
import './models/Project.js'
import './models/Bug.js'
import sequelize from './database/connectDB.js'
// sequelize.sync({ alter: true, force: true })
//Express
import express from 'express'
const app = express()
const port = process.env.PORT
import bugRouter from './router/bug.routes.js'

//middlewares
app.use(express.json())
app.use('/api/v1', bugRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




