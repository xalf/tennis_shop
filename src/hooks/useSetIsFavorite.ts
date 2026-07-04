"use client";

import { FavoriteContext } from "@/providers/FavoriteProvider";
import { useContext } from "react";

export default function useSetIsFavorite() {
  const { setFavorite } = useContext(FavoriteContext);

  return setFavorite;
}
