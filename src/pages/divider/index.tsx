import Box from '../../lib/components/box/box';
import Divider from '../../lib/components/divider/divider';
import Text from '../../lib/components/text/text';

const DividerPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Divider
			</Text>
			<Box type='column'>
				<Divider />
				<Divider margin />
			</Box>
		</Box>
	);
};
export default DividerPage;
