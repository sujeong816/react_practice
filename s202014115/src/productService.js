import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000"

export async function loadProducts() { 
    try { 
        const response = await axios.get("/products")
        return response.data 
    } catch (error) { 
        alert('조회 에러: ' + (error instanceof Error ? error.message : error)) 
    } 
} 

export async function loadProduct(id) { 
    try { 
        const response = await axios.get("/products/" + id)
        return response.data 
    } catch (error) { 
        alert('조회 에러: ' + (error instanceof Error ? error.message : error)) 
    } 
} 

export async function updateProduct(product) { 
    try { 
        await axios.put("/products/" + product.id, product) 
    } catch (error) { 
        alert('저장 에러: ' + (error instanceof Error ? error.message : error)) 
    } 
} 

export async function insertProduct(product) { 
    try { 
        await axios.post("/products", product) 
    } catch (error) { 
        alert('등록 에러: ' + (error instanceof Error ? error.message : error)) 
    } 
} 

export async function deleteProduct(id) { 
    try { 
        await axios.delete("/products/" + id)
    } catch (error) { 
        alert('삭제 에러: ' + (error instanceof Error ? error.message : error)) 
    } 
}