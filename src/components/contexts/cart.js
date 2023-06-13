import { createContext, useEffect, useState } from "react";
import { getLocalCart } from "../../utils/cartFunctions";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    // const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        getLocalCart().then(data => {
            const arr = data != null ? JSON.parse(data) : []
            setCartItems(arr);
        })
    })
    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;