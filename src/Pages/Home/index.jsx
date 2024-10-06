import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

function Home() {
    
    const [items, setItems] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setItems(data)
        }

        fetchData()
    }, [])

    return (
        <Layout>
            Home
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
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