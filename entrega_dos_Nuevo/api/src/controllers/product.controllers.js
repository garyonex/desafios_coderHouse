import Products from "../models/Products"
export const createProduct = async ( req, res) => {
    const {body} = req
    const {name, img, price} = body
    const newProduct = await Products({
        name,
        img,
        price
    })
    try {
        const savedProduct = newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        console.log(error);
    }
}