import { useState } from 'react';
import Box from '../../lib/components/box/box';
import Text from '../../lib/components/text/text';
import Textarea from '../../lib/components/textarea/textarea';
import React from 'react';

const TextareaPage = () => {
	const [state, setState] = useState('');
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Textarea
			</Text>
			<Box>
				<Textarea
					placeholder='Введите текст'
					size={120}
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</Box>
		</Box>
	);
};
export default TextareaPage;
