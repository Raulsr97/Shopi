import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
    
    const { items } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-5">
                {
                    items?.map(item => (
                        <Card 
                            data={item}
                            key={item.id} 
                        />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }