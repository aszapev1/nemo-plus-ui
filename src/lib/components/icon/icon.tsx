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
	const { width, height, variant, className, name } = props;
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
			<Component variant={variant} width={width} height={height} />
		</div>
	);
});

Icon.defaultProps = {
	name: 'CheckCircle'
}

export default Icon;
