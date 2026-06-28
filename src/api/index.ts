import { Racket } from "@/domain/racket";
import { ApiResponse } from "@/domain/dto";
import { cookies } from "next/headers";
import { User } from "@/domain/user";

export async function getRackets(
  page: number,
  limit: number,
): ApiResponse<Racket[]> {
  try {
    const cookiesStore = await cookies();
    const result = await fetch(
      `${process.env.BASE_API_URL}/products?page=${page}&limit=${limit}`, {
        headers: cookiesStore ? {
          Cookie: cookiesStore.toString(),
        } : {},
        next: { tags: ["list"], revalidate: 600 },
      }
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
    const cookiesStore = await cookies();
    const result = await fetch(`${process.env.BASE_API_URL}/top-10`, {
      headers: cookiesStore ? {
        Cookie: cookiesStore.toString(),
      } : {},
      next: { tags: ["top"], revalidate: 600 },
    });

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
    const cookiesStore = await cookies();
    const result = await fetch(
      `${process.env.BASE_API_URL}/product/${id}`,
      {
           headers: cookiesStore
        ?  {
              Cookie: cookiesStore.toString(),
            } : undefined,
            credentials: "include",
            next: { tags: ["racket"], revalidate: 600 },
          }
    
    );

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
export const getMetadataRacketById = async (
  id: number,
): ApiResponse<Racket> => {
  const result = await fetch(`${process.env.BASE_API_URL}/meta/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: Racket } = await result.json();

  return { isError: false, data: data.product };
};

export async function login(request: {
  login: string;
  password: string;
}): ApiResponse<string[]> {
  try {
    const result = await fetch(`${process.env.BASE_API_URL}/auth/login`, {
      body: JSON.stringify(request),
      method: "POST",
    });

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    const setCookieHeader = result.headers.getSetCookie();

    return { isError: false, data: setCookieHeader };
  } catch {
    return { isError: true, data: undefined };
  }
}

export async function signup(request: {
  login: string;
  password: string;
}): ApiResponse<string[]> {
  try {
    const result = await fetch(`${process.env.BASE_API_URL}/auth/signup`, {
      body: JSON.stringify(request),
      method: "POST",
    });

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    const setCookieHeader = result.headers.getSetCookie();

    return { isError: false, data: setCookieHeader };
  } catch {
    return { isError: true, data: undefined };
  }
}

export async function getUserData(): ApiResponse<User | null> {
  try {
    const cookiesStore = await cookies();

    const result = await fetch(`${process.env.BASE_API_URL}/auth/user`, {
      headers: {
        Cookie: cookiesStore.toString(),
      },
      credentials: "include",
    });
    if (!result.ok) {
      return { isError: true, data: undefined };
    }
    const { user } = await result.json();
    return { data: user, isError: false };
  } catch {
    return { isError: true, data: undefined };
  }
}

export async function logout(): ApiResponse<null> {
  try {
    const cookiesStore = await cookies();
    const result = await fetch(`${process.env.BASE_API_URL}/auth/logout`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        Cookie: cookiesStore.toString(),
      },
    });

    return { isError: !result.ok, data: undefined };
  } catch {
    return { isError: true, data: undefined };
  }
}


export async function setFavorite(id: number, isFavorite: boolean): ApiResponse<void> {
  try {
    const cookiesStore = await cookies();
    const result = await fetch(
      `${process.env.BASE_API_URL}/product/${id}/favorite`,
      {
            headers: {
              Cookie: cookiesStore.toString(),
            },
            credentials: "include",
            method: isFavorite ? 'POST' : 'DELETE'
          }
    );

    if (result.status === 404) {
      return { isError: true, data: undefined };
    }

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    return { isError: false, data: undefined };
  } catch {
    return { isError: true, data: undefined };
  }
}