import { getRackets, getTheBestRackets } from "@/api";
import CustomLink from "@/components/CustomLink";
import RacketsGallery from "@/components/RacketsGallery";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Главная | Tennis store",
  description: "Покупайте наши крутые ракетки",
};

export default async function Page() {
  const rackets = getRackets(1, 10);
  const besty = getTheBestRackets();

  return (
    <main>
      <h1>Главная страница</h1>
      <Suspense fallback={"Загружаем список"}>
        <RacketsGallery rackets={rackets} />
      </Suspense>
      <h2>
        <CustomLink href="/top10">ТОП-10</CustomLink>
      </h2>
      <Suspense fallback={"Загружаем список"}>
        <RacketsGallery rackets={besty} />
      </Suspense>
    </main>
  );
}
