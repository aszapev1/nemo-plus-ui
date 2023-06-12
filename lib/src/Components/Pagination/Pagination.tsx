import React from 'react';
import PaginationItem from './PaginationItem';
import usePagination from './usePagination';
import './Pagination.css';
import IconButton from '../IconButton';

interface PropsPagination {
	className?: string;
	page?: number;
	controls?: boolean;
	total: number;
	activePage: number;
	size: 32 | 44;
	onChange: (page: number) => void;
}

const Pagination = (props: PropsPagination) => {
	const { className, total, activePage, controls, onChange, size } = props;
	const css = ['nemo-pagination'];
	const { range } = usePagination({
		total,
		activePage,
	});

	if (className) {
		css.push(className);
	}

	const handleNext = () => {
		onChange(activePage + 1);
	};

	const handlePrevious = () => {
		onChange(activePage - 1);
	};

	return (
		<div className={css.join(' ')}>
			{controls && activePage > 1 && (
				<IconButton
					variant='ghost'
					icon='arrow'
					iconTurn='left'
					size={size}
					onClick={handlePrevious}
				/>
			)}

			{range.map((item, index) => {
				if (item !== 'dots') {
					return (
						<PaginationItem
							key={index}
							size={size}
							value={item}
							active={item === activePage}
							onClick={(page) => onChange(page)}
						/>
					);
				}
				return (
					<div className='pagination-item_dots' key={index}>
						...
					</div>
				);
			})}
			{controls && activePage !== total && (
				<IconButton
					variant='ghost'
					icon='arrow'
					iconTurn='right'
					size={size}
					onClick={handleNext}
				/>
			)}
		</div>
	);
};

export default Pagination;
