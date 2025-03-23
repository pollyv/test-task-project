export interface Product {
    id: number;
    name: string;
    status: 'available' | 'out_of_stock';
    date_created: string;
    price: number;
    type: 'beans' | 'ground' | 'drip';
}