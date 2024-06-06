import { createNote } from "../lib/actions";

export default async function Page() {
  return (
    <main className="flex flex-col items-center p-24">
      <form action={createNote}>
        <input
          type="text"
          name="name"
          className="block rounded-md border-0 py-1.5 pl-7 pr-20 mb-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
        />

        <input
          type="text"
          name="email"
          className="block rounded-md border-0 py-1.5 pl-7 pr-20 mb-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
        />

        <label className="block">
          <input type="radio" name="number" value="first" /> First
        </label>
        <label className="block">
          <input type="radio" name="number" value="second" /> Second
        </label>
        <button type="submit" className="border p-3 mt-4">
          Отправить
        </button>
      </form>
    </main>
  );
}
