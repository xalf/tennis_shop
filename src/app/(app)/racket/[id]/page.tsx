import { getMetadataRacketById, getRacket } from "@/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import RacketFull from "./racketFull";

export async function generateMetadata({
  params,
}: PageProps<"/racket/[id]">): Promise<Metadata> {
  const { id } = await params;
  const meta = await getMetadataRacketById(parseInt(id));

  return {
    title: `${meta.data?.name} | Tennis store`,
    description: meta.data?.description,
  };
}

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
      <RacketFull racket={racketResponse.data} />
    </main>
  );
}
