import React from 'react';
import Toggle from './Toggle';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

export default {
	title: 'components/Toggle',
	component: Toggle,
	args: {
		size: 24,
		checked: false,
		disabled: false
	}
} as ComponentMeta<typeof Toggle>;

export const Demo: ComponentStory<typeof Toggle> = (args) => {
	const [_, updateArgs] = useArgs();

	return (
		<Toggle
			size={args.size}
			checked={args.checked}
			onChange={() => updateArgs({...args, checked: !args.checked})}
			disabled={args.disabled}
		/>
	);
};
