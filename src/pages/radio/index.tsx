import { useState } from 'react';
import Box from '../../lib/components/box/box';
import Radio from '../../lib/components/radio/radio';
import Text from '../../lib/components/text/text';

const RadioPage = () => {
	const [state, setState] = useState('radio1');
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Radio
			</Text>
			<Box type='column'>
				<label>
					<Radio
						size={24}
						value='radio1'
						checked={state}
						onChange={(event) => setState(event.target.value)}
					/>
					<p>test</p>
				</label>
				<label>
					<Radio
						size={24}
						value='radio2'
						checked={state}
						onChange={(event) => setState(event.target.value)}
					/>
					<p>test</p>
				</label>
			</Box>
		</Box>
	);
};
export default RadioPage;
