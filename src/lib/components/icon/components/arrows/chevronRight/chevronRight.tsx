import React from 'react';
import { iconPropsVariant } from '../../../types';
import ChevronRightOutline from './chevronRightOutline';

const ChevronRight = (props: iconPropsVariant) => {
	const { width, height } = props;
	return <ChevronRightOutline width={width} height={height} />;
};

ChevronRight.defaultProps = {
	variant: 'outline',
	width: 24,
	height: 24,
};

export default ChevronRight;