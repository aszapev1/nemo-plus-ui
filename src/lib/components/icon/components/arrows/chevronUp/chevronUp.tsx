import React from 'react';
import { iconPropsVariant } from '../../../types';
import ChevronUpOutline from './chevronUpOutline';

const ChevronUp = (props: iconPropsVariant) => {
	const { width, height } = props;
	return <ChevronUpOutline width={width} height={height} />;
};

ChevronUp.defaultProps = {
	variant: 'outline',
	width: 24,
	height: 24,
};

export default ChevronUp;