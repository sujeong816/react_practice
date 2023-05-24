import React, { useEffect, useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom' 
import styled from 'styled-components'; 
import type { DispatchFunc, Product } from './productReducer' 
import { createProduct } from './productReducer' 
import { loadProduct, updateProduct, addProduct } from './productService'; 

const Div = styled.div` 
    & > div { margin-bottom: 20px; } 
    & input[type=text], input[type=email], input[type=tel] { 
        padding: 8px; width: 300px; font-size: 12pt; } 
    & select { padding: 8px; width: 300px; font-size: 12pt; } 
    & > div > label { margin-right: 20px; font-size: 12pt; } 
    & button { border: 1px solid black; padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; } `; 
    
type Props = { dispatch : DispatchFunc } 
const ProductAdd = React.memo(({ dispatch }: Props) => { 
    const navigate = useNavigate(); 
    const params = useParams(); // /edit/3 URL에서 3 부분을 꺼내기 위한 객체 
    const id: number = params.id ? parseInt(params.id) : 0; // URL에서 id 값을 꺼낸다 
    const [product, setProduct] = useState<Product>(createProduct()); 
    const load = async () => { 
        // id 값으로 제품을 조회하기 위한 함수 
        const product1: Product = await loadProduct(Number(id), dispatch); 
        setProduct(product1); // 조회된 값을 product 상태에 채운다 
    } 
    useEffect(() => { 
        if (id) 
            loadProduct(Number(id), dispatch)
                .then(product => setProduct(product)) 
    }, []); // 컴포넌트가 마운트 될 때, id 값으로 제품을 조회한다 
    const onChange = (e: any) => setProduct({ ...product, [e.target.name]: e.target.value }); 
    const onSave = () => { 
        if (product.id) 
            updateProduct({...product, timestamp: Date.now()}, dispatch); // 서버에 수정 요청 
        else 
            addProduct(product, dispatch); // 서버에 등록 요청 
            navigate('/'); // 목록 화면으로 나간다 
    } 
    const onCancel = () => navigate('/'); // 목록 화면으로 나간다 
    return ( 
    <Div> 
        <h1>제품 등록</h1> 
        <div> 
            <input type="text" onChange={onChange} placeholder='제품명'
                    name="title" value={product.title} /> 
        </div> 
        <div> 
            <input type="text" onChange={onChange} placeholder='가격'
                    name="price" value={product.price} /> 
        </div> 
        <div> 
            <input type="text" onChange={onChange} placeholder='수량'
                    name="quantity" value={product.quantity} /> 
        </div> 
        <div> 
            <input type="checkbox" onChange={onChange} value={'유효'}
                    name="available"/> 유효
        </div> 
        <div> 
            <select value={product.category} name="category" onChange={onChange}>  
                <option>카테고리를 선택하세요</option>
                <option>음료</option> 
                <option>과자</option> 
                <option>빵</option> 
            </select> 
        </div> 
        <div> 
            <button type="button" onClick={onSave}>저장</button> 
            <button type="button" onClick={onCancel}>취소</button> 
        </div> 
    </Div> 
    ) 
}) 
export default ProductAdd