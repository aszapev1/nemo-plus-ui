import React from 'react';
import './Link.css';

export type LinkProps = {
	className?: string;
	size: 16 | 20 | 24;
	variant: 'primary' | 'secondary';
	href?: string;
	children: string;
	target?: string;
	iconLeft?: string;
	iconRight?: string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Link = (props: LinkProps) => {
	const { className, size, variant, href, onClick, children, target } = props;
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
			<span>
				{children}
			</span>
		</a>
	);
};

Link.defaultProps = {
	size: 20,
	variant: 'primary',
};
export default Link;
