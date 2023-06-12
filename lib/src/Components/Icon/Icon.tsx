import React from 'react';
import IconContainer from './IconContainer';
import { IconProps } from './types';
import './Icon.css';
const Icon = (props: IconProps) => {
	const { variant, width, height, turn } = props;
	const css = ['nemo-icon'];
	if (turn) {
		css.push(`nemo-icon_transform--${turn}`);
	}
	return (
		<div className={css.join(' ')} style={{ width: width, height: height }}>
			<IconContainer variant={variant} width={width} height={height} />
		</div>
	);
};
Icon.defaultProps = {
	turn: 'up',
	variant: 'arrow'
};
export default Icon;
