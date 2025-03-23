import products from '~/products.json';

export default defineEventHandler(() => {
    return products;
});