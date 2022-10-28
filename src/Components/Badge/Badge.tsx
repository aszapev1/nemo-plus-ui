import React from 'react';
import './Badge.css';
export interface BadgeProps {
	className?: string;
	size: 24 | 32 | 44;
	variant:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'negative'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark';
	children: string | number;
}
const Badge = (props: BadgeProps) => {
	const css = ['nemo-badge'];
	if (props.className) {
		css.push(props.className);
	}
	if (props.size) {
		css.push(`nemo-badge--${props.size}`);
	}
	if (props.variant) {
		css.push(`nemo-badge--${props.variant}`);
	}
	return (
		<div className={css.join(' ')}>
			<span className='font font-medium nemo-badge-children'>
				{props.children}
			</span>
		</div>
	);
};
export default Badge;
