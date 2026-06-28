'use client';

import { FavoriteContext } from "@/providers/FavoriteProvider";
import { useContext, useEffect } from "react";

export default function useHydrateFavorites(productId: number, isFavoriteInitial: boolean = false): void {
    const favoriteContext = useContext(FavoriteContext);

    useEffect(() => {
        if (typeof favoriteContext.favorites[productId] !== "boolean" && typeof isFavoriteInitial === "boolean") {
            favoriteContext?.setFavorite?.(productId, isFavoriteInitial);
        }
    }, [favoriteContext?.setFavorite, productId, isFavoriteInitial]);
}