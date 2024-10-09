import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

function MyOrder() {

    const { order } = useContext(ShoppingCartContext)

    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    if (index === 'last') index = order?.length - 1

    return (
        <Layout>
            <div className="flex items-center justify-center w-80 relative">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className="h-4 w-4 text-black cursor-pointer"/>
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="w-80 h-96 mt-5">
            {
                order?.[index]?.products.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        id={product.id}
                    />
                ))
            }
            </div>
        </Layout>
    )
}

export { MyOrder }