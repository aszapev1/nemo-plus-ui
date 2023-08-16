import { useState } from 'react';
import Box from '../../lib/components/box/box';
import Text from '../../lib/components/text/text';
import Tab from '../../lib/components/tab';
import React from 'react';

const TabPage = () => {
	const [state, setState] = useState('tab1');
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Tab
			</Text>
			<Box>
				<Tab
					size={44}
					name='tab1'
					activeTab={state}
					onClick={(name) => setState(name)}>
					<Text tag='span' weight='medium' size={17} lineHeight={24}>
						Paragraph
					</Text>
				</Tab>
				<Tab
					size={44}
					name='tab2'
					activeTab={state}
					onClick={(name) => setState(name)}>
					<Text tag='span' weight='medium' size={17} lineHeight={24}>
						Paragraph
					</Text>
				</Tab>
			</Box>
		</Box>
	);
};
export default TabPage;
