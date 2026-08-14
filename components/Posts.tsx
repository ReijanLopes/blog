import { useCallback, useMemo, useState } from "react";

import PostItems from "./PostItems";

import { paginate } from "@/utils/paginate";

import type { PostType } from "@/types";

type PostsProps = {
  posts: PostType[];
  perPage?: number;
  page?: number;
};

export default function Posts({ posts, perPage = 6, page = 1 }: PostsProps) {
  const [currentPage, setCurrentPage] = useState(page);

  const { items, totalPages, hasNextPage, hasPreviousPage } = useMemo(
    () => paginate(posts, currentPage, perPage),
    [posts, currentPage, perPage]
  );

  const renderListPosts = useCallback(
    ({ file, frontmatter }: PostType, idx: number) => (
      <PostItems file={file} frontmatter={frontmatter} key={idx} />
    ),
    []
  );

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <ul className="grid justify-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 w-full list">
        {items?.map(renderListPosts)}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center gap-4 text-white">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={!hasPreviousPage}
            className="py-2 px-4 rounded-md border border-[#374151] disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-600"
          >
            Anterior
          </button>

          <span className="text-sm font-semibold">
            Página {currentPage} de {totalPages}
          </span>

          <button
            type="button"
            onClick={goToNextPage}
            disabled={!hasNextPage}
            className="py-2 px-4 rounded-md border border-[#374151] disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-600"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
