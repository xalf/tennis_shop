"use client";

import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink";
import classNames from "classnames";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex">
      <p className="mr-auto">Tennis store</p>
      <nav>
        <CustomLink
          href="/"
          className={classNames({
            "px-2": true,
            "text-red-900": pathname.match(/^\/$/),
          })}
        >
          Главная
        </CustomLink>
        <CustomLink
          href="/rackets"
          className={classNames({
            "px-2": true,
            "text-red-900": pathname.match(/^\/racket/),
          })}
        >
          Ракетки
        </CustomLink>
      </nav>
    </header>
  );
}
