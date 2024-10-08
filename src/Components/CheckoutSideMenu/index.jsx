import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'


const CheckoutSideMenu = () => {

    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, setOrder, order } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)

        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '07.10.2024',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
    }

    return (
        <aside 
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-2 bg-white border border-green-500 rounded-lg shadow-2xl overflow-auto h-64 scrollbar-hide top-20`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div className='flex justify-center items-center bg-red-500 rounded-full m-2 w-6 h-6 transition-all  duration-300 transform hover:scale-125 cursor-pointer' onClick={() => closeCheckoutSideMenu()}>
                <XMarkIcon className="size-4 text-white cursor-pointer" />
                </div>
            </div>
            {
                cartProducts.map( product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        id={product.id}
                        handleDelete={handleDelete}
                    />
                ))
            }
            <div className='p-6'>
                <p className=' flex items-center justify-between '>
                    <span className='text-sm'>Total:</span>
                    <span className='text-sm font-medium'>${totalPrice(cartProducts)}</span>
                </p>
                <div className='flex justify-center mt-7 w-full'>
                    <Link to='/my-orders/last'>
                        <button className='bg-green-500 rounded-lg p-1 text-white w-full' onClick={() => handleCheckout()}>
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }