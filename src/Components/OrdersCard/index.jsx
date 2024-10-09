const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className="w-72 flex justify-between item-center p-3 mt-5 shadow-lg rounded-lg">
            <p className="w-full flex items-center justify-between">
                <span className="text-sm font-medium">08.10.2024</span>
                <span className="text-sm font-medium">{totalProducts}</span>
                <span className="text-sm font-medium">${totalPrice}</span>
            </p>
        </div>
    )
}

export { OrdersCard }