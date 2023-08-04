import { iconPropsVariant } from '../../../types';
import CloseOutline from './closeOutline';

const Close = (props: iconPropsVariant) => {
	const { width, height } = props;
	return <CloseOutline width={width} height={height} />;
};

Close.defaultProps = {
	variant: 'outline',
	width: 24,
	height: 24,
};

export default Close;
