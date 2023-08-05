import { useState } from 'react';
import Box from '../../lib/components/box/box';
import Switch from '../../lib/components/switch/switch';
import Text from '../../lib/components/text/text';
import React from 'react';

const SwitchPage = () => {
	const [state, setState] = useState(false);
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Switch
			</Text>
			<label>
				<Switch
					size={32}
					checked={state}
					onChange={(event) => setState(event.target.checked)}
				/>
			</label>
		</Box>
	);
};
export default SwitchPage;
