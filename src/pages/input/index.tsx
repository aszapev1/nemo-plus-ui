import { useState } from 'react';
import Box from '../../lib/components/box/box';
import Input from '../../lib/components/input/input';
import Text from '../../lib/components/text/text';
import React from 'react';

const InputPage = () => {
	const [state, setState] = useState('');
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Input
			</Text>
			<Box type='column'>
				<Input
					type='text'
					value={state}
					onChange={(event) => setState(event.target.value)}
					size={44}
					autoFocus
					placeholder='Введите логин'
				/>
				<Input
					type='password'
					value={state}
					onChange={(event) => setState(event.target.value)}
					size={44}
					placeholder='Введите пароль'
				/>
			</Box>
		</Box>
	);
};

export default InputPage;
