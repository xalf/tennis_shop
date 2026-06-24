"use client";

import { useTransition } from "react";
import logoutAction from "./logout-action";

export default function Logout() {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await logoutAction();
          document.location.assign("/");
        });
      }}
    >
      Выйти
    </button>
  );
}
