import React from 'react';
import './Link.css';

export interface LinkProps {
	className?: string;
	size: 16 | 20 | 24;
	variant: 'primary' | 'secondary';
	href?: string;
	children: React.ReactNode | undefined;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Link = (props: LinkProps) => {
	const { className, size, variant, href, onClick, children } = props;
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
		<div className={css.join(' ')}>
			<a
				className='nemo-link--component'
				href={href}
				onClick={onClick}
			>
				{children}
			</a>
		</div>
	);
};
export default Link;
