'use client';

import useIsFavorite from "@/hooks/useIsFavorite";
import favoriteAction from "./favorite-action";
import useSetIsFavorite from "@/hooks/useSetIsFavorite";

export default function Favorite(props: { productId: number; }) {
  const isFavorite = useIsFavorite(props.productId);
  const setFavorite = useSetIsFavorite();

  async function sendFavorite() {
    setFavorite(props.productId, !isFavorite);

    await favoriteAction(props.productId, !isFavorite);
  } 

  return (
    <button onClick={() => sendFavorite()}>{isFavorite ? "в избранном" : "добавить в избранное"}</button>
  );
}
