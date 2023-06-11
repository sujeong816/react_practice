import React from 'react'
import { Product } from "./productTypes"

type Props = {
    product: Product
}

const ProductItem = React.memo(({product}: Props) => {
    console.log("ProductItem", product.id)

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.available ? "유효" : ""}</td>
        </tr>
    )
})

export default ProductItem