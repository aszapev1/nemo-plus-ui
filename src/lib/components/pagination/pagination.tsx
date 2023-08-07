import PaginationItem from './paginationItem';
import usePagination from './usePagination';
import Button from '../button/button';
import Icon from '../icon/icon';
import './pagination.css';

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
				<Button
					type='button'
					size={size}
					variant='secondary'
					onClick={handlePrevious}>
					<Icon
						width={size === 32 ? 16 : 24}
						height={size === 32 ? 16 : 24}
						variant='outline'
						name='ChevronLeft'
					/>
				</Button>
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
				<Button
					type='button'
					size={size}
					variant='secondary'
					onClick={handleNext}>
					<Icon
						width={size === 32 ? 16 : 24}
						height={size === 32 ? 16 : 24}
						variant='outline'
						name='ChevronRight'
					/>
				</Button>
			)}
		</div>
	);
};

export default Pagination;
