import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {

    const { order } = useContext(ShoppingCartContext)

    return (
        <Layout>
            My Orders
            {
                order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard 
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
            
        </Layout>
    )
}

export { MyOrders }