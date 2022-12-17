import { CreateContext, useEffect, useState } from 'react'

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [ products, serProducts ] = useState([])

    // Falta colocar la conexion con el back con axios 
    // para que pueda hacer las peticiones correctamente

    // Cada vez que se actualize el carrito seteamos el localStorage
    useEffect(() => {
        
    })
}