import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const tag = searchParams.get("tag");
  revalidateTag(tag ?? "top", {});

  return new Response();
}
