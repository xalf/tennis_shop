import { getRackets } from "@/api";
import RacketsGallery from "@/components/RacketsGallery";

export default function Page() {
  const rackets = getRackets();

  return (
    <main>
      <h1>Главная страница</h1>
      <RacketsGallery rackets={rackets} />
    </main>
  );
}
