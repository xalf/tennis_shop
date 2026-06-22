import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Не найдено | Tennis store",
};

export default async function RacketNotFound({
  params,
}: PageProps<"/racket/[id]">) {
  const { id } = await params;

  return (
    <main>
      <h1>Ракетка {id} не найдена</h1>
    </main>
  );
}
