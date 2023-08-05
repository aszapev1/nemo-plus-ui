import React from 'react';
import Badge from '../../lib/components/badge/badge';
import Box from '../../lib/components/box/box';
import Icon from '../../lib/components/icon/icon';
import Text from '../../lib/components/text/text';

const BadgesPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Badge
			</Text>
			<Box>
				<Badge size={32} variant='primary'>
					<Text tag='span' weight='medium' size={14} lineHeight={20}>
						Badge
					</Text>
					<Icon
						width={20}
						height={20}
						variant='outline'
						name='ChevronRight'
					/>
				</Badge>
			</Box>
		</Box>
	);
};
export default BadgesPage;
