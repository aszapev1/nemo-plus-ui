import { ReactElement } from 'react';
import './badge.css';
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
	children: ReactElement | ReactElement[];
}
const Badge = (props: BadgeProps) => {
	const { className, size, variant } = props;
	const css = ['nemo-badge', `nemo-badge--${size}`, `nemo-badge--${variant}`];
	if (className) {
		css.push(className);
	}
	return (
		<div className={css.join(' ')}>
			<span className='nemo-badge-children'>{props.children}</span>
		</div>
	);
};

export default Badge;
