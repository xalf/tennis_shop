"use server";

import { parseSetCookie } from "@/utils/parse-set-cookie";
import { cookies } from "next/headers";
import { signup as signupRequest } from "@/api";

interface SignupState {
  error: boolean;
  redirectUrl?: string;
  previousValue?: {
    login?: string;
    password?: string;
  };
}

export default async function signupAction(
  state: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const login = formData.get("login")?.toString();
  const password = formData.get("password")?.toString();

  if (!login || !password) {
    return {
      error: true,
      previousValue: {
        login,
        password,
      },
    };
  }
  const request = {
    login,
    password,
  };

  const result = await signupRequest(request);

  if (result.isError) {
    return { error: true, previousValue: request };
  }
  const cookiesStore = await cookies();

  if (result.data) {
    const parsed = parseSetCookie(result.data);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: false, redirectUrl: "/", previousValue: request };
}
