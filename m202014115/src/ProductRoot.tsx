import React, { useReducer, useEffect } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import styled from 'styled-components'; 
import ProductEdit from './ProductEdit'; 
import ProductList from './ProductList'; 
import { reducer, initialState } from './productReducer'; 
import { reloadProducts } from './productService'; 
import ProductAdd from './ProductAdd'

const Div = styled.div` 
    border: 1px solid gray; width: 800px; 
    margin: 10px auto; 
    box-shadow: 5px 5px 5px #DDD; 
    padding: 30px; 
    & #error { margin-top: 20px; color: red; border: 1px solid #faa; padding: 10px 20px; 
        border-radius: 10px; background-color: #fee; } 
    & #error span { float: right; font-weight: bold; cursor: pointer; } `; 
    
const ProductRoot = React.memo(() => { 
    const [state, dispatch] = useReducer(reducer, initialState) 
    useEffect(() => { reloadProducts(dispatch); }, []); // 마운트 될 때, 제품 목록을 조회한다 
    const clearErr = () => dispatch({type: 'setErrorMsg', payload: { errorMsg: "" }}); 
    return ( 
        <Div> 
            <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<ProductList products={state.products} />} /> 
                    <Route path="/edit/:id" element={<ProductEdit dispatch={dispatch} />} /> 
                    <Route path="/add" element={<ProductAdd dispatch={dispatch}/>} />
                </Routes> 
            </BrowserRouter> 
            { state.errorMsg && <div id="error">{state.errorMsg} 
            <span onClick={clearErr}>x</span></div> } 
        </Div> 
    ) 
}) 
export default ProductRoot;