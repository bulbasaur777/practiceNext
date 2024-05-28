"use client";

export default function Page({ params }: { params: { listItem: string } }) {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="">Пост № {params.listItem}</span>
    </main>
  );
}
