import React, { ReactElement } from 'react';
import './link.css';

export type LinkProps = {
	className?: string;
	size: 16 | 20 | 24;
	variant: 'primary' | 'secondary';
	href?: string;
	children: string;
	target?: string;
	iconLeft?: ReactElement;
	iconRight?: ReactElement;
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
		iconRight,
	} = props;
	const css = ['nemo-link', `nemo-link--${size}`, `nemo-link--${variant}`];
	if (className) {
		css.push(className);
	}

	return (
		<a
			className={css.join(' ')}
			href={href}
			onClick={onClick}
			target={target}>
			<span className='nemo-link_container'>
				{iconLeft && iconLeft}
				<span className='nemo-link_text'>{children}</span>
				{iconRight && iconRight}
			</span>
		</a>
	);
};

export default Link;
