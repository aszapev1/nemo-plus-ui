import React from 'react';
import Avatar from '../../lib/components/avatar/avatar';
import Box from '../../lib/components/box/box';
import Text from '../../lib/components/text/text';

const AvatarPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Аватар
			</Text>
			<Box>
				<Avatar size={44} />
			</Box>
		</Box>
	);
};
export default AvatarPage;
