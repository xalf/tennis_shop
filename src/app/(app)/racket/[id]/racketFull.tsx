'use client';

import { Racket } from "@/domain/racket";
import Image from "next/image";
import useHydrateFavorites from "@/hooks/useHydrateFavorites";
import Favorite from "@/components/Favorite";

export default function RacketFull(props: {racket: Racket}) {
    const { racket } = props;
    useHydrateFavorites(racket.id, racket.userData?.isFavorite);

    return <section className="flex gap-1">
        <div className="w-30%">
          <p>{racket.brand.name}</p>
          <h1>{racket.name}</h1>
          <p>{racket.description}</p>
          {racket.userData && (
            <Favorite productId={racket.id} />
          )}
        </div>
        <Image
          className="w-170"
          width={300}
          height={350}
          src={racket.imageUrl}
          alt={racket.name}
        />
        <p className="text-4xl mx-30">&euro;{racket.price}</p>
      </section>
} 