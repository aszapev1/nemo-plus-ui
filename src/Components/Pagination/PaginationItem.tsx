import React from 'react';
export interface propsPaginationItem {
	className?: string;
	active: boolean;
	value: number;
    size: number;
	onClick: (page: number) => void;
}

const PaginationItem = (props: propsPaginationItem) => {
	const css = ['nemo-pagination_item'];
	const { active, className, onClick, size, value } = props;
	if (className) {
		css.push(className);
	}

	if (active) {
		css.push('active');
	}

    if (size) {
        css.push(`nemo-pagination_item--${size}`)
    }

	return (
		<button
			className={css.join(' ')}
			type='button'
			onClick={() => onClick(value)}
		>
			{value}
		</button>
	);
};

export default PaginationItem;
