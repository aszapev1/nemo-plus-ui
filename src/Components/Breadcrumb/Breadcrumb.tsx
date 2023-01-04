import React, { isValidElement } from 'react';
import Link from '../Link';
import { LinkProps } from '../Link/Link';
import './Breadcrumb.css';

export interface BreadcrumbProps {
	className?: string;
	size: 16 | 20 | 24;
	children: React.ReactElement | React.ReactElement[];
	variant: 'primary' | 'secondary';
}

const Breadcrumb = (props: BreadcrumbProps) => {
	const { className, children, size, variant } = props;
	const css = ['breadcrumb'];
	if (className) {
		css.push(className);
	}

	return (
		<div className={css.join(' ')}>
			{React.Children.map(children, (child) => {
				if (isValidElement<LinkProps>(child)) {
					return React.cloneElement(child, {
						size: size,
						variant: variant,
						iconRight: 'arrow',
						iconRightTurn: 'right',
					});
				}
			})}
		</div>
	);
};

export default Object.assign(Breadcrumb, {
	Item: Link,
});
