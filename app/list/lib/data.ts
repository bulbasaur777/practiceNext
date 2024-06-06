import { sql } from "@vercel/postgres";

export async function fetchTotalPages(query: string) {
  const data: any = await sql`
        SELECT COUNT(*)
        FROM example_table
        WHERE name ILIKE ${`%${query}%`}
    `;

  const items = data.rows[0].count;
  const itemsPerPage = 2;
  const pages = Math.ceil(items / itemsPerPage);

  console.log(data);
  return pages;
}
