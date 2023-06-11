import React from 'react' 
import styled from 'styled-components'
import useInput from './useInput' 
import type { Product, AddProductFunc } from './productTypes' 

const Div = styled.div` 
& > div { margin-bottom: 8px; } 
& input[type=text], input[type=number] { 
    padding: 5px; width: 300px; font-size: 11pt; } 
& select { padding: 5px; width: 300px; font-size: 11pt; } 
& > div > label { margin-right: 20px; font-size: 12pt; } 
& button { padding: 0.3em 1.5em; font-size: 11pt; margin-right: 5px; } 
& input[type=checkbox] { margin-right: 10px; } 
`; 

type Props = { 
    addProduct : AddProductFunc 
} 

const emptyProduct: Product = {id:0, title:'', quantity:0, price:0, available:false}

const ProductAdd = React.memo(({ addProduct }: Props) => { 
    console.log("ProductAdd")
    
    const [product, setProduct, onChange] = useInput<Product>(emptyProduct)
    const onAdd = () => { 
        addProduct(product)
        setProduct(emptyProduct) 
    } 
    
    return ( 
        <Div> 
            <div> 
                <input type="text" placeholder="제품" onChange={onChange} 
                        name="title" value={product.title} /> 
            </div> 
            <div> 
                <input type="number" placeholder="가격" onChange={onChange} 
                        name="price" value={product.price} /> 
            </div> 
            <div> 
                <input type="number" placeholder="수량" onChange={onChange} 
                        name="quantity" value={product.quantity} /> 
            </div> 
            <div> 
                <label> 
                    <input type="checkbox" onChange={onChange} 
                        name="available" checked={product.available} /> 
                    <span>유효</span> 
                </label> 
            </div> 
            <div> 
                <button type="button" onClick={onAdd}>저장</button> 
            </div> 
        </Div> 
    ) 
}) 

export default ProductAdd