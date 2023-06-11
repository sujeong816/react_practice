export type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    available: boolean;
}

export type AddProductFunc = (product: Product) => void;