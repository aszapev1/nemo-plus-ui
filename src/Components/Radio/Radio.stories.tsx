import React from 'react';
import Radio from './Radio';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

export default {
	title: 'components/Radio',
	component: Radio,
	args: {
		size: 24,
		checked: false,
		disabled: false,
	},
} as ComponentMeta<typeof Radio>;

export const Demo: ComponentStory<typeof Radio> = (args) => {
	const [_, updateArgs] = useArgs();

	return (
		<label htmlFor='radio_id'>
			<Radio
                id='radio_id'
				size={args.size}
				value='radio1'
				checked={args.checked}
				onChange={() => updateArgs({ ...args, checked: true })}
				disabled={args.disabled}
			/>
		</label>
	);
};
