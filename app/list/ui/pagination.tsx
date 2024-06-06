"use client";

import Link from "next/link";
import { sql } from "@vercel/postgres";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ pages }: { pages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  let pagesElem: any[] = [];

  for (let i = 1; i <= pages; i++) {
    pagesElem.push(
      <span
        className={`mr-4 ${
          currentPage == i ? "font-bold underline decoration-solid" : ""
        }`}
        key={i}
      >
        <Link href={createPageURL(i)}>{i}</Link>
      </span>
    );
  }

  return <div className="mt-4">{pagesElem}</div>;
}
