import express from 'express'
import path from 'path'
import multer from 'multer'
import { engine } from 'express-handlebars'
import productRoutes from '../routes/products.routes'
import addProductsRoutes from '../routes/addProducts.routes'

const app = express()
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('views', '../views')
app.set('view engine', 'ejs')
// ** multer
const storage = multer.diskStorage({
  destination: './src/public/files',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
app.use(
  multer({
    storage,
    dest: './src/public/files',
  }).single('imagen')
)
//Seteo - motor de plantilla

app.set('views', path.join(__dirname, '../views'));
app.engine(
    '.hbs',
    engine({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.get('/',(req,res) => {
  res.render('./layouts/main')
})
//routes
app.use('/api/products', productRoutes)
app.use('/api/addProducts', addProductsRoutes)
export default app