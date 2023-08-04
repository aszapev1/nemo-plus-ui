import { iconPropsVariant } from '../../../types';
import ChevronDownOutline from './chevronDownOutline';

const ChevronDown = (props: iconPropsVariant) => {
	const { width, height } = props;
	return <ChevronDownOutline width={width} height={height} />;
};

ChevronDown.defaultProps = {
	variant: 'outline',
	width: 24,
	height: 24,
};

export default ChevronDown;