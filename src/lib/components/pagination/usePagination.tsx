import { useMemo } from 'react';

export const range = (start: number, end: number) => {
	const length = end - start + 1;

	return Array.from({ length }, (_, index) => index + start);
};

export const DOTS = 'dots';

export interface PaginationParams {
	total: number;
	activePage: number;
}

export type PaginationItemParam = number | typeof DOTS;

const usePagination = ({ total, activePage }: PaginationParams) => {
	const paginationRange = useMemo((): PaginationItemParam[] => {
		const totalPageNumbers = 16;

		if (totalPageNumbers >= total) {
			return range(1, total);
		}
		const leftSiblingIndex = Math.max(activePage - 1, 1);
		const rightSiblingIndex = Math.min(activePage + 1, total - 1);

		const shouldShowLeftDots = leftSiblingIndex > 5;
		const shouldShowRightDots = rightSiblingIndex < total - 4;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 7;

			return [...range(1, leftItemCount), DOTS, ...range(total, total)];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 6;

			return [
				...range(1, 1),
				DOTS,
				...range(total - rightItemCount, total),
			];
		}

		return [
			...range(1, 1),
			DOTS,
			...range(activePage - 3, activePage + 3),
			DOTS,
			...range(total, total),
		];
	}, [total, activePage]);

	return {
		range: paginationRange,
	};
};

export default usePagination;
