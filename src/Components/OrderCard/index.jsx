import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = ({ id, title, price, imageUrl, handleDelete}) => {

    let renderXMarkIcon

    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className="h-4 w-4 text-black cursor-pointer" onClick={() => handleDelete(id)}></XMarkIcon>
    }
    
    return (
        <div className="flex justify-between item-center p-2">
            <div className="flex items-center gap-2">
                <figure className="w-16 h-16">
                    <img className="w-full h-full rounded-lg object-contain" src={imageUrl} alt="" />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium">${price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export { OrderCard }