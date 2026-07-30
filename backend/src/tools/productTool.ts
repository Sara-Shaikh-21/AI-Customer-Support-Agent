import { products } from "../data/mockData.js";

export function searchProducts(query: string) {
    const search = query.toLowerCase();

    return products.filter((product) => {
        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();

        return (
            name.includes(search) ||
            search.includes(name) ||
            category.includes(search)
        );
    });
}