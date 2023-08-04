import Box from '../../lib/components/box/box';
import Loader from '../../lib/components/loader/loader';
import Text from '../../lib/components/text/text';

const LoaderPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Loader
			</Text>
            <Box>
                <Loader size={16} variant='default'/>
                <Loader size={24} variant='default'/>
                <Loader size={40} variant='default'/>
            </Box>
		</Box>
	);
};
export default LoaderPage;
