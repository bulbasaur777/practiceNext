import { sql } from "@vercel/postgres";

export default async function Page({
  params,
}: {
  params: { listItem: string };
}) {
  const result: any = await sql`
      SELECT * FROM example_table WHERE id = ${params.listItem}
  `;

  const note = result.rows[0];

  return (
    <main className="flex flex-col items-center p-24">
      <span className="">Пост {note?.name ?? "User not found:("}</span>
    </main>
  );
}
