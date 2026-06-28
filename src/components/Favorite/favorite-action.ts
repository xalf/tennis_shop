"use server";

import { setFavorite } from "@/api";
import { ApiResponse } from "@/domain/dto";

export default async function favoriteAction(productId: number, isFavorite: boolean): ApiResponse<void> {
    return await setFavorite(productId, isFavorite);
}