import { createStore } from "@atomico/store";

interface StoreProduct{
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
        "rate": number,
        "count": number
    }
}   

export const Store =  createStore<{
    products: []
}>({
    products: []
});
