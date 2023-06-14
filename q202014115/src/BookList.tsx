import React from 'react' 
import { useNavigate } from 'react-router-dom' 
import styled from 'styled-components'
import BookItem from './BookItem' 
import type { Book } from './bookReducer' 

const Div = styled.div` 
    & > button { padding: 0.2em 1.5em; font-size: 11pt; 
                margin-bottom: 5px; float: right; } 
    & table { border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto; } 
    & thead { background-color: #eee; text-align: center; } 
    & td { border: 1px solid gray; padding: 4px; } 
    & td:nth-child(1) { text-align: center; width: 30px; } 
    & tr:hover { background-color: #ffe; cursor: pointer; } ` 
    
type Props = { books: Book[] } 

const BookList = React.memo(({ books }: Props) => { 
    const navigate = useNavigate() 
    const trlist = books.map(book => 
        <BookItem key={book.id} book={book} />)
        
    const onCreate = () => navigate('/edit/0')
    
    return ( 
        <Div> 
            <button type="button" onClick={onCreate}>등록</button> 
            
            <table> 
                <thead> 
                    <tr>
                        <td>id</td>
                        <td>제목</td>
                        <td>저자</td>
                        <td>가격</td> 
                        <td>카테고리</td>
                    </tr> 
                </thead> 
                <tbody> {trlist} </tbody> 
            </table> 
        </Div> 
    ) 
}) 

export default BookList