import Link from "next/link";

export default function Page() {
  const arrayList = [1, 2, 3, 4];

  const list = arrayList.map((item) => (
    <li key={item}>
      <Link className="cursor-pointer hover:underline" href={`/list/${item}`}>
        Ссылка №{item}
      </Link>
    </li>
  ));

  return (
    <main className="flex flex-col items-center p-24">
      <ul>{list}</ul>
    </main>
  );
}
