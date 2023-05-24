import type { Timestamped } from "./timestamped"
import { mergeTimestampedList } from "./timestamped"

//Timestamped 타입을 부모 타입으로 선언
export type Product = Timestamped & { 
    id: number, // 부모 타입에 들어있으므로 생략해도 된다
    title: string, 
    category: string, 
    price: number, 
    quantity: string, /** 수량 */
    available: boolean,
    timestamp: number // 부모 타입에 들어있으므로 생략해도 된다
} 
export type State = { 
    products: Product[], 
    errorMsg: string, 
} 
export const initialState: State = { 
    products: [], 
    errorMsg: '' 
} 
export type Action = { 
    type: 'setProducts', 
    payload: { products: Product[] } } | 
    { type: 'setErrorMsg', payload: { errorMsg: string } } 
    
export type DispatchFunc = (action: Action) => void; 
export type ReducerFunc = (state: State, action: Action) => State; 

export function createProduct(): Product { 
    return { id: 0, title:'', category: '', 
                price: 0, quantity: '', available: true, timestamp:0 }; 
} 

function merge(oldProducts: Product[], newProducts: Product[]): Product[] { 
    const map = new Map<number, Product>(); 
    for (const product of oldProducts) 
        map.set(product.id, product); 
    return newProducts.map(product => { 
        const oldProduct = map.get(product.id); 
        return (oldProduct && oldProduct.timestamp == product.timestamp) 
        ? oldProduct : product; 
    }); 
} 
export const reducer: ReducerFunc = ({ products, errorMsg }: State, action: Action) => { 
    switch (action.type) { 
        case 'setProducts': 
        products = mergeTimestampedList<Product>(products, action.payload.products) 
        if (errorMsg) errorMsg = ''; 
            break; 
            
        case 'setErrorMsg': 
        errorMsg = action.payload.errorMsg; 
        break; 
        
        default: 
            throw new Error('unknown action type'); 
    } 
    return { products, errorMsg }; 
}