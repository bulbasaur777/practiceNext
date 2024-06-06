"use server";

import { sql } from "@vercel/postgres";

export async function createNote(formData: FormData) {
  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    number: formData.get("number") as string,
  };

  const date = new Date().toISOString().split("T")[0];
  const date2 = new Date().toISOString().split("T")[0];

  await sql`
    INSERT INTO example_table (name, email, created_at, updated_at)
    VALUES (${rawFormData.name}, ${rawFormData.email}, ${date}, ${date2})
  `;
}
