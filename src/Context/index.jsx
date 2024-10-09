import { createContext, useState, useEffect } from "react";

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

    // Get Products
    const [items, setItems] = useState(null)

    // Api
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setItems(data)
        }

        fetchData()
    }, [])

 
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
            setOrder,
            items,
            setItems
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}