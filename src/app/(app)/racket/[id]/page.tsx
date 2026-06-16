import { getRacket } from "@/api";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function RacketPage({
  params,
}: PageProps<"/racket/[id]">) {
  const { id } = await params;
  const racketResponse = await getRacket(parseInt(id));

  if (racketResponse.isError) {
    throw new Error("Ошибка сервера");
  }
  if (!racketResponse.data) {
    notFound();
  }
  return (
    <main>
      <section className="flex gap-1">
        <div className="w-30%">
          <p>{racketResponse.data.brand.name}</p>
          <h1>{racketResponse.data.name}</h1>
          <p>{racketResponse.data.description}</p>
        </div>
        <Image
          className="w-170"
          width={300}
          height={350}
          src={racketResponse.data.imageUrl}
          alt={racketResponse.data.name}
        />
        <p className="text-4xl mx-30">&euro;{racketResponse.data.price}</p>
      </section>
    </main>
  );
}
