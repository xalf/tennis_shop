import { getTheBestRackets } from "@/api";
import RacketItem from "@/components/RacketItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ТОП 10 ракеток | Tennis store",
  description: "На этой странице лучшие ракетки нашего магазина",
};

export default async function TopPage() {
  const rackets = await getTheBestRackets();

  if (rackets.isError) {
    throw new Error("Ошибка сервера");
  }
  return (
    <main>
      <h1>Топовые ракетки</h1>
      <div className="flex flex-wrap gap-1">
        {rackets.data?.map((item, index) => (
          <RacketItem key={item.id} racket={item} isEager={index < 3} />
        ))}
      </div>
    </main>
  );
}
