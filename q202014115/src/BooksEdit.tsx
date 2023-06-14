import React, { useEffect, useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom' 
import styled from 'styled-components'
import type { DispatchFunc, Book } from './bookReducer' 
import { createBook } from './bookReducer' 
import { loadBook, updateBook, addBook, deleteBook } from './bookService'

const Div = styled.div` 
    & > div { margin-bottom: 20px; } 
    & input[type=text], input[type=number] { 
        padding: 8px; width: 300px; font-size: 12pt; } 
    & select { padding: 8px; width: 300px; font-size: 12pt; } 
    & > div > label { margin-right: 20px; font-size: 12pt; } 
    & button { padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; } ` 
    
type Props = { dispatch : DispatchFunc } 

const BookEdit = React.memo(({ dispatch }: Props) => { 
    const navigate = useNavigate()
    const params = useParams() // /edit/3 URL에서 3 부분을 꺼내기 위한 객체 
    const id: number = params.id ? parseInt(params.id) : 0 // URL에서 id 값을 꺼낸다 
    const [book, setBook] = useState<Book>(createBook())
    
    const load = async () => { 
        // id 값으로 책을 조회하기 위한 함수 
        const book1: Book = await loadBook(Number(id), dispatch)
        setBook(book1) // 조회된 값을 book 상태에 채운다 
    } 
    useEffect(() => { if (id) load(); }, []) // 컴포넌트가 마운트 될 때, id 값으로 책 조회한다 

    const onChange = (e: any) => setBook({ ...book, [e.target.name]: e.target.value })


    const onSave = () => { 
        if (book.id) 
            updateBook({...book, timestamp: Date.now()}, dispatch) // 서버에 수정 요청 
        else 
            addBook(book, dispatch) // 서버에 등록 요청 
        navigate('/'); // 목록 화면으로 나간다 
    } 
    const onDelete = () => { 
        if (confirm('삭제하시겠습니까?')) { 
            deleteBook(id, dispatch) // 서버에 삭제 요청 
             .then(()=>navigate('/')) // 목록 화면으로 나간다 
        } 
    } 
    const onCancel = () => navigate('/') // 목록 화면으로 나간다 
    
    return ( 
        <Div> 
            <h1>책 { id ? '수정' : '등록' }</h1> 
            
            <div> 
                <input type="text" placeholder="제목" onChange={onChange} 
                        name="title" value={book.title} /> 
            </div> 
            <div> 
                <input type="text" placeholder="저자" onChange={onChange} 
                        name="author" value={book.author} /> 
            </div> 
            <div> 
                <input type="number" placeholder="0" onChange={onChange} 
                        name="price" value={book.price} /> 
            </div> 
            <div> 
                <select value={book.categoryId} name="categoryId" onChange={onChange}> 
                    <option value={0}>카테고리를 선택하세요</option> 
                    <option value={1}>소설</option> 
                    <option value={2}>경제</option> 
                    <option value={3}>역사</option> 
                    <option value={4}>과학</option>
                </select> 
            </div> 
            <div> 
                <button type="button" onClick={onSave}>저장</button> 
                { (id>0) && <button type="button" onClick={onDelete}>삭제</button>} 
                <button type="button" onClick={onCancel}>취소</button> 
            </div> 
        </Div> 
    ) 
}) 
export default BookEdit