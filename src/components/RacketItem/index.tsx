'use client';

import { Racket } from "@/domain/racket";
import Image from "next/image";
import CustomLink from "@/components/CustomLink";
import useHydrateFavorites from "@/hooks/useHydrateFavorites";
import Favorite from "@/components/Favorite";
import { useContext } from "react";
import { UserContext } from "@/providers/UserProvider";

export default function RacketItem(props: {
  racket: Racket;
  isEager: boolean;
}) {
  const { racket, isEager } = props;
  const userData = useContext(UserContext);
  useHydrateFavorites(racket.id, racket.userData?.isFavorite);
  
  return (
    <article>
      <CustomLink href={`/racket/${racket.id}`}>
        <figure>
          <Image
            width={300}
            height={350}
            src={racket.imageUrl}
            alt={racket.name}
            style={{ width: "100%", height: "auto" }}
            loading={isEager ? "eager" : "lazy"}
          />
          <figcaption>{racket.name}</figcaption>
        </figure>
      </CustomLink>
      {userData?.login && <Favorite productId={racket.id} />}
    </article>
  );
}
