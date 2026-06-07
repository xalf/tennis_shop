import { getRackets } from "@/api"
import RacketItem from "@/components/RacketItem";

export default function RacketsPage() {
    const rackets = getRackets();
    return <main>
        <h1>Ракетки</h1>
        <div className="flex flex-wrap gap-1">
            {rackets.map(item => <RacketItem key={item.id} racket={item} />)}
        </div>
    </main>
}