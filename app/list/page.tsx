import Link from "next/link";
import { sql } from "@vercel/postgres";
import Search from "./ui/search";
import Table from "./ui/table";
import { Suspense } from "react";
import Pagination from "./ui/pagination";
import { fetchTotalPages } from "./lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTotalPages(query);

  return (
    <main className="flex flex-col items-center p-24">
      <Search />
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination pages={totalPages} />
    </main>
  );
}
