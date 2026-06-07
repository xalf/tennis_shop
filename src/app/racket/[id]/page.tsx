import { getRacket } from "@/api";
import Image from "next/image";
import { notFound } from 'next/navigation'

export default async function RacketPage({ params }: PageProps<'/racket/[id]'>) {
    const { id } = await params;
    const racket = getRacket(parseInt(id));
    if (!racket) {
        notFound()
    }
    return <main>
        <section className="flex gap-1">
            <div className="w-30%">
                <p>{racket.brand.name}</p>
                <h1>{racket.name}</h1>
                <p>{racket.description}</p>
            </div>
            <Image className="w-170" width={300} height={350} src={racket.imageUrl} alt={racket.name} />
            <p className="text-4xl mx-30">&euro;{racket.price}</p>
        </section>
    </main>
}

export function generateStaticParams() {
    return [{
        id: '1'
    }, {
        id: '2'
    }, {
        id: '3'
    }]
}