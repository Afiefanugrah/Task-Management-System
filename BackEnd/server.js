const express = require('express')
require('dotenv').config()
const port = process.env.PORT

// db confiq
// const sequlize = require('./Config/db.config')
// sequlize.sync().then(() => console.log("Database ready!"))

const UserEdnpoind = require('./Routers/UserRoutes')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Selamat dtang')
})

app.use('/api/auth', UserEdnpoind)

app.listen(port, () => {
  console.log(`Port running to ${port}`)
})