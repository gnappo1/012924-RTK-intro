import React from 'react'
import { useGetProductsQuery } from '../../app/services/productApi'
import ProductCard from './ProductCard'

const ProductContainer = () => {
    const {currentData, isFetching, isLoading, isError} = useGetProductsQuery({
        cacheTime: 5000
    })

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }
    
    if (isError) {
        return <h2>Oooopsie!</h2>
    }

    const mappedProducts = currentData.products.map(prod => <ProductCard key={prod.id} {...prod} />)
    
    return (
        <div>{mappedProducts}</div>
    )
}

export default ProductContainer