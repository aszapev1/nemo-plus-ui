import React from 'react';
import Icon from '../Icon';
import './Link.css';

export type LinkProps = {
	className?: string;
	size: 16 | 20 | 24;
	variant: 'primary' | 'secondary';
	href?: string;
	children: string;
	target?: string;
	iconLeft?: string;
	iconLeftTurn: 'up' | 'right' | 'down' | 'left';
	iconRightTurn: 'up' | 'right' | 'down' | 'left';
	iconRight?: string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Link = (props: LinkProps) => {
	const {
		className,
		size,
		variant,
		href,
		onClick,
		children,
		target,
		iconLeft,
		iconLeftTurn,
		iconRight,
		iconRightTurn,
	} = props;
	const css = ['nemo-link'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-link--${size}`);
	}

	if (variant) {
		css.push(`nemo-link--${variant}`);
	}
	return (
		<a
			className={css.join(' ')}
			href={href}
			onClick={onClick}
			target={target}
		>
			<span className='nemo-link_container'>
				{iconLeft && (
					<Icon
						height={size === 16 ? 16 : 24}
						width={size === 16 ? 16 : 24}
						turn={iconLeftTurn}
						variant={iconLeft}
					/>
				)}
				<span className='nemo-link_text'>{children}</span>
				{iconRight && (
					<Icon
						height={size === 16 ? 16 : 24}
						width={size === 16 ? 16 : 24}
						turn={iconRightTurn}
						variant={iconRight}
					/>
				)}
			</span>
		</a>
	);
};

Link.defaultProps = {
	size: 20,
	variant: 'primary',
	iconLeftTurn: 'up',
	iconRightTurn: 'up',
};
export default Link;
