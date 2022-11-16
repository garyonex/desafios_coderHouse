import express from 'express'
import path from 'path'
const app = express()
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
// app.set('views', './src/views')
// app.set('view engine', 'ejs')

export default app