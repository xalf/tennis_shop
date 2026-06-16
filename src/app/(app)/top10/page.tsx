import { getTheBestRackets } from "@/api";
import RacketItem from "@/components/RacketItem";

export default async function TopPage() {
  const rackets = await getTheBestRackets();

  if (rackets.isError) {
    throw new Error("Ошибка сервера");
  }
  return (
    <main>
      <h1>Топовые ракетки</h1>
      <div className="flex flex-wrap gap-1">
        {rackets.data?.map((item) => (
          <RacketItem key={item.id} racket={item} />
        ))}
      </div>
    </main>
  );
}
