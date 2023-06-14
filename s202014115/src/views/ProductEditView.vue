<template> 
    <div id="ProductEdit"> 
        <h1>제품 {{ product.id > 0 ? "수정" : "등록" }}</h1> 
        <div> 
            <input type="text" v-model="product.title" /> 
        </div> 
        <div> 
            <input type="number" v-model="product.price" /> 
        </div> 
        <div>
            <select v-model="product.category"> 
                <option value="선택" selected>카테고리를 선택하세요</option> 
                <option value="음료수">음료수</option> 
                <option value="과자">과자</option> 
                <option value="주류">주류</option> 
            </select> 
        </div> 
        
        <div> 
            <button type="button" @click="save">저장</button> 
            <button type="button" @click="remove" v-show="product.id > 0">삭제</button> 
            <button type="button" @click="goList">취소</button> 
        </div> 
    </div> 
</template> 

<script> 
import { loadProduct, updateProduct, insertProduct, deleteProduct } from '../productService'

export default { 
    name: "ProductEditView", 
    data() { 
        return { 
            product: { }, 
        } 
    }, async mounted() { 
        const id = this.$route.params.id 
        if (id > 0) 
            this.product = await loadProduct(id)
        else 
            this.product = {id:0, title:'', price: 0, category: '선택'}
    }, methods: { 
        async save() { 
            if (this.product.id > 0) 
                await updateProduct(this.product)
            else 
                await insertProduct(this.product) 
            this.goList()
        }, goList() { 
            this.$router.push("/")
        }, async remove() {
            if (confirm("삭제하시겠습니까?")) { 
                await deleteProduct(this.product.id) 
                this.goList() 
            } 
        } 
    } 
} 
</script> 

<style> 
input[type=text], input[type=number] { 
    padding: 6px; width: 200px; } 
select { padding: 6px; width: 200px } 
div { margin-bottom: 15px; } 
label { margin-right: 15px; } 
button { padding: 5px 20px; margin-right: 10px; } 
</style>