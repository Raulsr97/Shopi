import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Card = ({ data }) => {

    const {count, setCount} = useContext(ShoppingCartContext)

    return(
     <div className='bg-white shadow-lg rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'>
        <figure className='relative mb-2 w-full h-4/5'>
          <span className='absolute bottom-0 left-0 bg-green-500/60 rounded-lg text-black text-xs m-2 p-1 cursor-pointer'>{data.category}</span>
          <img 
            className='w-full h-full object-contain rounded-lg'
            src={data.image} 
            alt="headphones"
          />
          <div 
            className="absolute top-0 right-0 flex justify-center items-center bg-green-500 rounded-full m-2 w-6 h-6 transition-all  duration-300 transform hover:scale-125 cursor-pointer"
            onClick={() => setCount(count + 1)}
          >
            <span className="text-white font-semibold text-sm ">+</span>
          </div>
        </figure>
        <p className='flex justify-between p-2'> 
          <span className='text-sm font-light truncate'>{data.title}</span>
          <span className='text-sm font-medium'>${data.price}</span>
        </p>
     </div> 
    )
}

export { Card }