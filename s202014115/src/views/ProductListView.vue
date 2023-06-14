<template> 
    <div id="ProductListView"> 
        <div class="header"> 
            <h1>제품 목록</h1> 
            <button type="button" @click="goEdit(0)">등록</button> 
        </div> 
        <table> 
            <tr>
                <td>id</td>
                <td>제품명</td>
                <td>가격</td>
                <td>카테고리</td>
            </tr> 
            <tr v-for="product in products" v-bind:key="product.id" @click="goEdit(product.id)"> 
                <td>{{ product.id }}</td> 
                <td>{{ product.title }}</td> 
                <td>{{ product.price }}</td> 
                <td>{{ product.category }}</td> 
            </tr> 
        </table> 
    </div> 
</template> 

<script> 
import { loadProducts } from '../productService'
export default { 
    name: "ProductListView", 
    data() { 
        return { 
            products: [ ], 
        } 
    }, async mounted() { 
        this.products = await loadProducts()
    }, methods: { 
        goEdit(id) { 
            this.$router.push("/edit/" + id); 
        } 
    } 
} 
</script> 

<style scoped> 
div.header { display: flex; justify-content: space-between; align-items: baseline; } 
h1 { margin: 0; } 
table { border-collapse: collapse; width: 100%; } 
tr:nth-child(1) { background-color: #eee; text-align: center; } 
td { border: 1px solid gray; padding: 6px; } 
td:nth-child(1) { text-align: center; width: 30px; } 
tr:hover { background-color: #ffd; cursor: pointer } 
</style>