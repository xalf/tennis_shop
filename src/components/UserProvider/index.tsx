"use client";

import { createContext, PropsWithChildren } from "react";
import type { User } from "@/domain/user";

export const UserContext = createContext<User | null>(null);

interface Props {
  userData: User | null;
}

export default function UserProvider(props: PropsWithChildren<Props>) {
  return (
    <UserContext.Provider value={props.userData}>
      {props.children}
    </UserContext.Provider>
  );
}
