import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Card = ({ data }) => {

    const {count, setCount, openProductDetail, setShowProductDetail, setCartProducts, cartProducts, openCheckoutSideMenu, closeProductDetail} = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
      openProductDetail()
      setShowProductDetail(productDetail)
    }

    const addProductsToCart = (event, productData) => {
      event.stopPropagation()
      openCheckoutSideMenu()
      setCount(count + 1)
      setCartProducts([...cartProducts, productData])
    }

    const renderIcon = (id) => {
      const isInCart = cartProducts.filter(product => product.id === id).length > 0 

      if (isInCart) {
        return (
          <div 
              className="absolute top-0 right-0 flex justify-center items-center bg-black rounded-full m-2 w-6 h-6 transition-all  duration-300 transform hover:scale-125 cursor-pointer"
          >
              <span className="text-white font-semibold text-sm ">
                <CheckIcon 
                  className='size-4 text-white'
                />
              </span>
          </div>
        )
      } else {
          return (
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-green-500 rounded-full m-2 w-6 h-6 transition-all  duration-300 transform hover:scale-125 cursor-pointer"
                onClick={(event) => addProductsToCart(event, data)}
            >
                <span className="text-white font-semibold text-sm ">
                  <PlusIcon 
                    className='size-4 text-white'
                  />
                </span>
            </div>
          )
      }

      
    }

    return(
     
     <div 
      className='bg-white  shadow-md rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300 w-48 h-56 cursor-pointer'
      onClick={() => showProduct(data)}
    >
      
        <figure className='relative mb-2 w-full h-4/5'>
          <span className='absolute bottom-0 left-0 bg-green-500/60 rounded-lg text-black text-xs m-2 p-1 cursor-pointer'>{data.category}</span>
          <img 
            className='w-full h-full object-contain rounded-lg'
            src={data.image} 
            alt="headphones"
          />
          {renderIcon(data.id)}
        </figure>
        <p className='flex justify-between p-2'> 
          <span className='text-sm font-light truncate'>{data.title}</span>
          <span className='text-sm font-medium'>${data.price}</span>
        </p>
     </div> 
    )
}

export { Card }