import React from 'react'
import { useSelector } from 'react-redux'

const BasketPage = () => {
    const { items } = useSelector((state) => state.basket)
    console.log(items)

    return (
        <>
            <ul className="products_basket">
                {items.map((item) => (
                    <li className="product_basket" key={item.id}>
                        <div className="product_info_basket">
                            <h3>{item.title}</h3>
                            <span>{item.price}</span>
                        </div>
                        <img src={item.picture} alt={item.title} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BasketPage
