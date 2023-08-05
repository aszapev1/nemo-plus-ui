import React from 'react';
import Box from '../../lib/components/box/box';
import Icon from '../../lib/components/icon/icon';
import Link from '../../lib/components/link/link';
import Text from '../../lib/components/text/text';

const LinkPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Link
			</Text>
			<Box>
				<Link
					href='/'
					size={24}
					variant='primary'
					iconRight={
						<Icon
							width={24}
							height={24}
							variant='outline'
							name='ChevronRight'
						/>
					}>
					Сcылка
				</Link>
				<Link
					href='/'
					size={24}
					variant='primary'
					iconRight={
						<Icon
							width={24}
							height={24}
							variant='outline'
							name='ChevronRight'
						/>
					}>
					Сcылка 2
				</Link>
				<Link href='/' size={24} variant='secondary'>
					Сcылка 3
				</Link>
			</Box>
		</Box>
	);
};
export default LinkPage;
