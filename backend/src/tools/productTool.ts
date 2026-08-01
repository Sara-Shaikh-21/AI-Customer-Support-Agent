import { products } from "../data/mockData.js";

const synonyms: Record<string, string[]> = {
    earbuds: ["airpods", "buds", "earbuds", "earphones", "wireless earbuds"],
    headphones: ["headphones", "headset"],
    shoes: ["shoes", "sneakers", "running shoes"],
    phone: ["phone", "mobile", "smartphone"],
};

export function searchProducts(query: string) {
    const search = query.toLowerCase();

    return products.filter((product) => {
        const text = `${product.name} ${product.category}`.toLowerCase();

        // Direct match
        if (text.includes(search)) {
            return true;
        }

        // Synonym match
        for (const words of Object.values(synonyms)) {
            if (
                words.some((word) => search.includes(word)) &&
                words.some((word) => text.includes(word))
            ) {
                return true;
            }
        }

        return false;
    });

}