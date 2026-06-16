import { Racket } from "@/domain/racket";
import { ApiResponse } from "@/domain/dto";

export async function getRackets(
  page: number,
  limit: number,
): ApiResponse<Racket[]> {
  try {
    const result = await fetch(
      `${process.env.BASE_API_URL}/products?page=${page}&limit=${limit}`,
    );

    if (result.status === 404) {
      return { isError: false, data: undefined };
    }

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    const products = await result.json();

    return { isError: false, data: products };
  } catch {
    return { isError: true, data: undefined };
  }
}

export async function getTheBestRackets(): ApiResponse<Racket[]> {
  try {
    const result = await fetch(`${process.env.BASE_API_URL}/top-10`);

    if (result.status === 404) {
      return { isError: false, data: undefined };
    }

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    const products = await result.json();

    return { isError: false, data: products };
  } catch {
    return { isError: true, data: undefined };
  }
}

export async function getRacket(id: number): ApiResponse<Racket> {
  try {
    const result = await fetch(`${process.env.BASE_API_URL}/product/${id}`);

    if (result.status === 404) {
      return { isError: false, data: undefined };
    }

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    const { product } = await result.json();

    return { isError: false, data: product };
  } catch {
    return { isError: true, data: undefined };
  }
}
