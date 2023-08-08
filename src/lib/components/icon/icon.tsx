import React from 'react';
import * as IconMap from './components/index';
import './icon.css';

export interface iconTypes {
	className?: string;
	width: number;
	height: number;
	variant: 'fill' | 'outline';
	name: string;
}

export type IconType = keyof typeof IconMap;

const Icon = React.forwardRef<HTMLDivElement, iconTypes>((props, ref) => {
	const { width, height, className, name } = props;
	const css = ['nemo-icon-container'];
	if (className) {
		css.push(className);
	}

	let iconsMap = Object.keys(IconMap);
	const Component = IconMap[name as IconType];
	if (!iconsMap.includes(name)) {
		return <div>Error Component</div>;
	}

	return (
		<div className={css.join(' ')} ref={ref}>
			<svg
				width={width}
				height={height}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<Component />
			</svg>
		</div>
	);
});

Icon.defaultProps = {
	name: 'CheckCircle',
};

export default Icon;
