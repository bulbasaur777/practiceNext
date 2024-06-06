"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handleDebouncedSearch = useDebouncedCallback(handleSearch, 400);

  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => {
          handleDebouncedSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 mb-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
