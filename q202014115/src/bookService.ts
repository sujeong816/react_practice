import type { Book, DispatchFunc } from './bookReducer'
import { createBook } from './bookReducer'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000"

// catch 블럭의 구현이 매우 유사하기 때문에, onError 함수로 추출해서 구현함. 
function onError(message: string, error: any, dispatch: DispatchFunc) { 
    const s = message + (error instanceof Error ? error.message : error)
    dispatch({type: 'setErrorMsg', payload: { errorMsg: s } }) 
} 

// 책 한 권을 조회해서 리턴하는 함수 구현. 
// async 함수의 리턴 타입은 Promise<Dto클래스> 이어야 한다. 
export async function reloadBooks(dispatch: DispatchFunc) { 
    try { 
        const response = await axios.get("/books")
        const books: Book[] = response.data
        dispatch({ type: 'setBooks', payload: { books } })
    } catch (error) { 
        onError('조회 에러: ', error, dispatch)
    } 
} 

// 수정 화면에서 수정할 책 데이터를 조회하기 위한 메소드 
export async function loadBook(id: number, dispatch: DispatchFunc): Promise<Book> { 
    try { 
        const response = await axios.get("/books/" + id)
        return response.data
    } catch (error) { 
        onError('조회 에러: ', error, dispatch)
        return createBook() 
    } 
} 

export async function updateBook(book: Book, dispatch: DispatchFunc) { 
    try { 
        await axios.put("/books/" + book.id, book)
        reloadBooks(dispatch)
    } catch (error) { 
        onError('저장 에러: ', error, dispatch)
    } 
} 

export async function deleteBook(id: number, dispatch: DispatchFunc) { 
    try { 
        await axios.delete("/books/" + id)
        reloadBooks(dispatch)
    } catch (error) { 
        onError('삭제 에러: ', error, dispatch)
    } 
} 

export async function addBook(book: Book, dispatch: DispatchFunc) { 
    try { 
        await axios.post("/books/", book)
        reloadBooks(dispatch)
    } catch (error) { 
        onError('저장 에러: ', error, dispatch) 
    } 
}