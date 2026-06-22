import CustomLink from "@/components/CustomLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Не найдено | Tennis store",
};

export default function RootNotFound() {
  return (
    <main>
      <h1>Такой страницы нет</h1>
      <CustomLink href="/">На главную</CustomLink>
    </main>
  );
}
