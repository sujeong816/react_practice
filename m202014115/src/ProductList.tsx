import React from 'react' 
import { useNavigate } from 'react-router-dom' 
import styled from 'styled-components'; 
import ProductItem from './ProductItem' 
import type { Product } from './productReducer' 

const Div = styled.div` 
    & > button { border: 1px solid black; padding: 0.2em 1.5em; font-size: 11pt; 
        margin-bottom: 5px; float: right; } 
    & table { border-collapse: collapse; width: 100%; } 
    & thead { background-color: #eee; text-align: center; } 
    & td { border: 1px solid gray; padding: 4px; } 
    & td:nth-child(1) { text-align: center; width: 30px; } 
    & tr:hover { background-color: #ffe; cursor: pointer; } `; 
    
type Props = { products: Product[] } 

const ProductList = React.memo(({ products }: Props) => { 
    const navigate = useNavigate() 
    const trlist = products.map(product => 
        <ProductItem key={product.id} product={product} />); 
        
    const onCreate = () => navigate('/add'); 
    return ( 
        <Div> 
            <h1>제품 목록</h1>
            <button type="button" onClick={onCreate}>등록</button> 
            <table> 
                <thead> 
                    <tr><td>id</td><td>제품</td><td>카테고리</td><td>가격</td> 
                    <td>수량</td><td>상태</td>
                    </tr> 
                </thead> 
                <tbody> {trlist} </tbody> 
            </table> 
        </Div> 
    ) 
}) 
export default ProductList