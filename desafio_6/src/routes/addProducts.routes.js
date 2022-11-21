import { Router } from "express";

const addProductsRoutes = Router()
addProductsRoutes.get('/', (req, res) => {
  res.render('./addProducts')
})
export default addProductsRoutes