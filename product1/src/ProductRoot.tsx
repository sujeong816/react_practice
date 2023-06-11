import React, { useState, useCallback, useMemo } from 'react'
import type { Product } from './productTypes'
import styled from 'styled-components'
import ProductItem from './ProductItem' 
import ProductAdd from './ProductAdd'

const initialData: Product[] = [ 
    { id:1, title:"콜라", price: 1000, quantity: 5, available:true}, 
    { id:2, title:"우유", price: 1500, quantity: 8, available:true}, 
    { id:3, title:"조리퐁", price: 1200, quantity: 15, available:true}, 
]; 

const Div = styled.div` 
    border: 1px solid gray; width: 500px; margin: 10px auto; 
    box-shadow: 5px 5px 5px #DDD; padding: 30px; 
    
    & > button { padding: 0.5em 2em; margin-top: 10px; } 
    & table { border-collapse: collapse; width: 100%; } 
    & thead { background-color: #eee; text-align: center; } 
    & td { border: 1px solid gray; padding: 5px; } 
    & td:nth-child(1) { text-align: center; width: 50px; } 
    & td:nth-child(3), td:nth-child(4) { text-align: right; } 
    & td:nth-child(5) { text-align: center; } 
    & hr { margin: 30px 0; } 
`; 

const ProductRoot = React.memo(() => { 
    console.log("ProductRoot")
    
    const [count, setCount] = useState<number>(0)
    const [products, setProducts] = useState<Product[]>(initialData) 
    const addProduct = useCallback((product: Product) => { 
        product.id = products[products.length - 1].id + 1
        setProducts([...products, product]) 
    }, [products, setProducts])
    const total = useMemo((): number => {
        console.log("getTotal")
        let result = 0
        for(const p of products)
            result += p.price * p.quantity
        return result
    }, [products])
    
    const trlist = products.map(product => 
        <ProductItem key={product.id} product={product} />)
        
    return ( 
        <Div> 
            <table> 
                <thead> 
                    <tr>
                        <td>id</td>
                        <td>제품명</td>
                        <td>가격</td>
                        <td>수량</td>
                        <td>상태</td>
                    </tr> 
                </thead> 
                <tbody> {trlist} </tbody> 
            </table> 
            <div>합계 : {total}</div>
            <button onClick={() => setCount(count + 1)}>count: { count }</button> 
            <hr /> 
            <ProductAdd addProduct={addProduct} /> 
        </Div> 
    ) 
}) 

export default ProductRoot