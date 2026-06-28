"use client";

import { Metadata } from "next";
import { useParams } from "next/navigation";

export const metadata: Metadata = {
  title: "Не найдено | Tennis store",
};

export default function RacketNotFound() {
  const { id } = useParams();

  return (
    <main>
      <h1>Ракетка {id} не найдена</h1>
    </main>
  );
}
