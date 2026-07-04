"use client";

import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink";
import classNames from "classnames";
import { PropsWithChildren, useContext } from "react";
import { UserContext } from "@/providers/UserProvider";
import Logout from "@/components/Logout";

export default function Header() {
  const pathname = usePathname();
  const userData = useContext(UserContext);

  return (
    <header className="flex">
      <p className="mr-auto">Tennis store</p>
      <nav>
        <NavLink href="/" isActive={!!pathname.match(/^\/$/)}>
          Главная
        </NavLink>
        <NavLink href="/rackets" isActive={!!pathname.match(/^\/racket/)}>
          Ракетки
        </NavLink>
        {userData ? (
          <>
            <span>{userData.login}</span>
            <Logout />
          </>
        ) : (
          <>
            <NavLink href="/login" isActive={!!pathname.match(/^\/login$/)}>
              Войти
            </NavLink>
            <NavLink href="/signup" isActive={!!pathname.match(/^\/signup/)}>
              Зарегистрироваться
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

function NavLink(
  props: PropsWithChildren<{ href: string; isActive: boolean }>,
) {
  return (
    <CustomLink
      href={props.href}
      className={classNames({
        "px-2": true,
        "text-red-900": props.isActive,
      })}
    >
      {props.children}
    </CustomLink>
  );
}
