import { Racket } from "@/domain/racket";
import Image from "next/image";
import CustomLink from "../CustomLink";

export default function RacketItem(props: {
  racket: Racket;
  isEager: boolean;
}) {
  const { racket, isEager } = props;
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
    </article>
  );
}
