import { Racket } from "@/domain/racket";
import { rackets } from "./mock";

export function getRackets(): Racket[] {
  return rackets;
}

export function getRacket(id: number): Racket | undefined {
  return rackets.find((item) => item.id === id);
}
