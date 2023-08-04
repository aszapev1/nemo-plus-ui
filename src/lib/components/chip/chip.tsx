import React from 'react';
import './chip.css';

export interface ChipTypes {
	className?: string;
	size: 20 | 28 | 32;
	children: string | number;
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	variant: 'primary' | 'secondary';
	icon: React.ReactElement;
}

function Chip(props: ChipTypes) {
	const { className, size, children, onClick, variant, icon } = props;
	const styles = ['nemo-chip', `nemo-chip_size_${size}`, `nemo-chip_variant_${variant}`];
	if (className) {
		styles.push(className);
	}

	return (
		<div className={styles.join(' ')} onClick={onClick}>
			<span className='nemo-chip__title'>{children}</span>
			<div className='nemo-icon-chip'>{icon}</div>
		</div>
	);
}

export default Chip;
