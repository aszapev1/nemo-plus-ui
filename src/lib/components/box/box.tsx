import React from 'react';
import './box.css';

export interface BoxTypes {
	tag?: 'main' | 'div' | 'section';
	className?: string;
	type?: 'column' | 'row';
	id?: string;
	onScroll?: (event: React.MouseEvent<HTMLDivElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
	tabIndex?: number;
	style?: object;
	children: React.ReactElement | React.ReactElement[];
}

const Box = React.forwardRef<HTMLDivElement, BoxTypes>((props, ref) => {
	const {
		className,
		type,
		id,
		tabIndex,
		onClick,
		style,
		children,
		onScroll,
		tag,
	} = props;
	const css = ['nemo-box'];
	if (className) {
		css.push(className);
	}
	if (type === 'column') {
		css.push('nemo-box_variant_column');
	}
	if (type === 'row') {
		css.push('nemo-box_variant_row');
	}
	return React.createElement(
		tag ? tag : 'div',
		{
			id: id,
			style: style,
			ref: ref,
			onScroll: onScroll,
			tabIndex: tabIndex,
			className: css.join(' '),
			onClick: onClick,
		},
		children
	);
});

export default Box;
