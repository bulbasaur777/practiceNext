import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const itemPerPage = 5;

  const data: any = await sql`
      SELECT * FROM example_table WHERE name ILIKE ${`%${query}%`} LIMIT ${itemPerPage} OFFSET ${
    itemPerPage * currentPage - itemPerPage
  }
  `;

  const rows = data?.rows;

  const list = rows.map((item: any) => (
    <li key={item.id}>
      <Link
        className="cursor-pointer hover:underline"
        href={`/list/${item.id}`}
      >
        Ссылка на {item.name}
      </Link>
    </li>
  ));

  return <ul>{list}</ul>;
}
