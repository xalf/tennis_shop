"use client";

import { useParams} from "next/navigation";

export default function RacketNotFound() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <main>
      <h1>Ракетка {id} не найдена</h1>
    </main>
  );
}
