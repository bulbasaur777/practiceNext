"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        className={`mr-4 ${pathname !== "/" ? "underline" : "active"}`}
        href="/"
      >
        Главная
      </Link>
      <Link
        className={`${pathname !== "/list" ? "underline" : "active"}`}
        href="/list"
      >
        Список
      </Link>
    </nav>
  );
}
