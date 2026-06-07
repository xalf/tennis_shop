import { Racket } from "@/domain/racket";
import Image from "next/image";
import CustomLink from "../CustomLink";

export default function RacketItem(props: { racket: Racket }) {
    const { racket } = props;
    return <article>
        <CustomLink href={`/racket/${racket.id}`}>
            <figure>
                <Image width={300} height={350} src={racket.imageUrl} alt={racket.name} />
                <figcaption>{racket.name}</figcaption>
            </figure>
        </CustomLink>
    </article>
}