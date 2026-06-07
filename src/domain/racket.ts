import { Brand } from "./brand";

export interface Racket {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    type: string; // ??
    model: string;
    year: number;
    top10: boolean;
    description: string;
    brandId: number;
    brand: Brand;
}