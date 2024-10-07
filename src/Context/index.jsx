import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Shopping Cart - increment Counter
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu
    const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setisCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setisCheckoutSideMenuOpen(false)

    // Product Detail - Show Product 
    const  [showProductDetail, setShowProductDetail] = useState({})

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

 
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            showProductDetail,
            setShowProductDetail,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}