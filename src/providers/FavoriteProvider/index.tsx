"use client";

import { createContext, useCallback, useState, PropsWithChildren } from "react";

interface FavoriteContextState {
    favorites: Record<number, boolean>;
    setFavorite: (productId: number, isFavorire: boolean) => void;
}

export const FavoriteContext = createContext<FavoriteContextState>({
    favorites: {},
    setFavorite: () => {},
})
export default function FavoriteProvider(props: PropsWithChildren) {
    
    const [favorites, setFavorites] = useState<Record<number, boolean>>({});
    const setFavorite = useCallback((id: number, isFavorite: boolean) => {
            setFavorites((prev) => {
        if (prev[id] === isFavorite) {
            return prev;
        }

        return {
            ...prev,
            [id]: isFavorite,
        };
        });
    }, [])

    return <FavoriteContext.Provider value={{ 
       favorites,
       setFavorite 
    }}>
        {props.children}
    </FavoriteContext.Provider>
}