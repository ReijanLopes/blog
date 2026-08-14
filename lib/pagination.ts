/** Quantidade de itens exibidos por página nas listagens do blog. */
export const POSTS_PER_PAGE = 6;

export type PaginationResult<T> = {
  items: T[];
  page: number;
  totalPages: number;
};

/**
 * Recorta um array para a página solicitada.
 * Números de página inválidos ou fora do intervalo são corrigidos
 * automaticamente para o limite mais próximo (1 ou totalPages).
 */
export function paginate<T>(
  items: T[],
  requestedPage: number,
  pageSize: number = POSTS_PER_PAGE
): PaginationResult<T> {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Math.min(
    Math.max(1, Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1),
    totalPages
  );
  const start = (page - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page,
    totalPages,
  };
}
