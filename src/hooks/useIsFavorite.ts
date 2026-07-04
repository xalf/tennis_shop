import { FavoriteContext } from "@/providers/FavoriteProvider";
import { useContext } from "react";

export default function useIsFavorite(productId: number): boolean | null {
  const favoriteContext = useContext(FavoriteContext);

  return favoriteContext?.favorites?.[productId] ?? null;
}
