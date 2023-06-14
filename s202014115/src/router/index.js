import { createRouter, createWebHistory } from 'vue-router' 
import ProductListView from '../views/ProductListView.vue' 
import ProductEditView from '../views/ProductEditView.vue' 
import CounterView from '../views/CounterView.vue'

const routes = [ 
    { 
        path: '/', 
        name: 'ProductListView', 
        component: ProductListView 
    }, 
    { 
        path: '/edit/:id', 
        name: 'ProductEditView', 
        component: ProductEditView 
    },
    {
        path: '/counter',
        name: 'counter',
        component: CounterView
    } 
] 

const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL), 
    routes 
}) 
export default router