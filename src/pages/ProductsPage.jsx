import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../store/productsSlice'
import { useSelector } from 'react-redux'
import { addProduct } from '../store/basketSlice'
const ProductsPage = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.products)
    const { items } = useSelector((state) => state.basket)
    console.log(products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const addToBasket = (id, title, price, picture) => {
        dispatch(addProduct({ id, title, price, picture }))
    }

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <>
            <ul className="products">
                {products.map((product) => (
                    <li key={product.id} className="product">
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <span>{product.price}</span>
                        </div>
                        <img src={product.thumbnail} alt={product.title} />
                        <p>{product.description}</p>
                        <button
                            onClick={() =>
                                addToBasket(
                                    product.id,
                                    product.title,
                                    product.price,
                                    product.thumbnail,
                                )
                            }
                            disabled={items.some(
                                (item) => item.id === product.id,
                            )}
                        >
                            {items.some((item) => item.id === product.id)
                                ? 'In basket'
                                : 'Add to basket'}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductsPage
