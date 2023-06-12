import React from 'react';
import Icon from '../Icon';
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
	iconLeft?: string;
	iconLeftTurn: 'up' | 'right' | 'down' | 'left';
	iconRightTurn: 'up' | 'right' | 'down' | 'left';
	iconRight?: string;
}
const Badge = (props: BadgeProps) => {
	const {
		className,
		size,
		variant,
		iconLeft,
		iconLeftTurn,
		iconRight,
		iconRightTurn,
	} = props;
	const css = ['nemo-badge'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-badge--${size}`);
	}
	if (variant) {
		css.push(`nemo-badge--${variant}`);
	}
	return (
		<div className={css.join(' ')}>
			<span className='font font-medium nemo-badge-children'>
				{iconLeft && (
					<Icon
						height={size - 8}
						width={size - 8}
						turn={iconLeftTurn}
						variant={iconLeft}
					/>
				)}
				{props.children}
				{iconRight && (
					<Icon
						height={size - 8}
						width={size - 8}
						turn={iconRightTurn}
						variant={iconRight}
					/>
				)}
			</span>
		</div>
	);
};

Badge.defaultProps = {
	size: 24,
	variant: 'primary',
	children: 'badge',
	iconLeftTurn: 'left',
	iconRightTurn: 'right',
};
export default Badge;
