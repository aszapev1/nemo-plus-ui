import React from 'react';
import './text.css';

export interface textTypes {
	// Tag в котором будет отображаться содержимое
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	// Передаваемое значение
	children: React.ReactElement | React.ReactElement[] | string | number;
	// Возможность передать сообственные стили
	className?: string;
	// Начертание и вес
	weight: 'regular' | 'medium' | 'bold';
	// Размер шрифта, задается в px
	size: 72 | 44 | 36 | 32 | 24 | 20 | 17 | 14 | 12 | 10;
	// Межстрочное растояние
	lineHeight: 72 | 44 | 40 | 36 | 32 | 28 | 24 | 20 | 16 | 12;
}

const Text = (props: textTypes) => {
	const {
		tag,
		children,
		className,
		weight,
		size,
		lineHeight,
	} = props;
	const css = [
		'nemo-text',
		`nemo-text_weight_${weight}`,
		`nemo-text_size_${size}`,
		`nemo-text_line-height_${lineHeight}`,
	];
	if (className) {
		css.push(className);
	}
	return React.createElement(tag, { className: css.join(' ') }, children);
};

export default Text;