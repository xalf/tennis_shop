import { getRackets } from "@/api";
import RacketItem from "@/components/RacketItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Все ракетки | Tennis store",
  description: "На этой странице все ракетки",
};

export default async function RacketsPage() {
  const rackets = await getRackets(1, 20);

  if (rackets.isError) {
    throw new Error("Ошибка сервера");
  }

  return (
    <main>
      <h1>Ракетки</h1>
      <div className="flex flex-wrap gap-1">
        {rackets.data?.map((item) => (
          <RacketItem key={item.id} racket={item} />
        ))}
      </div>
    </main>
  );
}
