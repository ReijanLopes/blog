"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type BlogSearchProps = {
  tags: string[];
  query: string;
  tag: string;
};

/**
 * Campo de busca por título (com debounce) e select de tag (keyFilter).
 * Os filtros são refletidos na URL (?q=&tag=), então quem faz a filtragem
 * de fato é o Server Component em page.tsx ao ler os searchParams.
 */
export function BlogSearch({ tags, query, tag }: BlogSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(query);

  // Mantém o input em sincronia se a URL mudar por fora (ex.: botão voltar)
  useEffect(() => {
    setInputValue(query);
  }, [query]);

  function navigateWithFilters(nextQuery: string, nextTag: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextQuery) params.set("q", nextQuery);
    else params.delete("q");

    if (nextTag) params.set("tag", nextTag);
    else params.delete("tag");

    params.delete("page"); // toda mudança de filtro volta para a primeira página

    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  // Evita navegar a cada tecla digitada, só busca depois que o usuário pausa
  useEffect(() => {
    if (inputValue === query) return;

    const timeoutId = setTimeout(() => {
      navigateWithFilters(inputValue, tag);
    }, 300);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Buscar por título..."
        className="flex-1 border border-black/10 rounded-md px-3 py-2 text-sm"
      />

      <select
        value={tag}
        onChange={(event) => navigateWithFilters(inputValue, event.target.value)}
        className="border border-black/10 rounded-md px-3 py-2 text-sm"
      >
        <option value="">Todas as tags</option>
        {tags.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
