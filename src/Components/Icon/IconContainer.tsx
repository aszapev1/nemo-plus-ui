import React from 'react';
import Arrow from './icons/Arrow';
import Close from './icons/Close';
import { IconPropsContainer } from './types';

const IconContainer = (props: IconPropsContainer) => {
	const { variant, width, height } = props;

	switch (variant) {
		case 'arrow':
			return <Arrow width={width} height={height} />;
		case 'close':
			return <Close width={width} height={height} />;
		default:
			return <Arrow width={width} height={height} />;
	}
};
export default IconContainer;
