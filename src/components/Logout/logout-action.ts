"use server";

import { logout } from "@/api";

export default async function logoutAction() {
  await logout();
}
