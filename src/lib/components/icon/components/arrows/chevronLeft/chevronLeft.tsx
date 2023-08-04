import { iconPropsVariant } from '../../../types';
import ChevronLeftOutline from './chevronLeftOutline';

const ChevronLeft = (props: iconPropsVariant) => {
	const { width, height } = props;
	return <ChevronLeftOutline width={width} height={height} />;
};

ChevronLeft.defaultProps = {
	variant: 'outline',
	width: 24,
	height: 24,
};

export default ChevronLeft;