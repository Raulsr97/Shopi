import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const ProductDetail = () => {

    const { isProductDetailOpen, closeProductDetail, showProductDetail } = useContext(ShoppingCartContext)

    return (
        <aside 
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-2 bg-white border border-green-500 rounded-lg shadow-2xl overflow-auto h-64 scrollbar-hide`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='flex justify-center items-center bg-red-500 rounded-full m-2 w-6 h-6 transition-all  duration-300 transform hover:scale-125 cursor-pointer' onClick={() => closeProductDetail()}>
                <XMarkIcon className="size-4 text-white cursor-pointer" />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full p-6'>
                <figure className='w-40 h-48 mb-4'>
                    <img 
                        className='w-full h-full rounded-lg object-contain' 
                        src={showProductDetail.image} 
                        alt={showProductDetail.title} 
                    />
                </figure>
                <p className='flex justify-between p-2 w-full'>
                    <span className='text-sm truncate'>{showProductDetail.title}</span>
                    <span className='text-sm font-medium'>${showProductDetail.price}</span>
                </p>
                
                <span className='text-sm font-light text-justify'>{showProductDetail.description}</span>
            </div>
            
        </aside>
    )
}

export { ProductDetail }