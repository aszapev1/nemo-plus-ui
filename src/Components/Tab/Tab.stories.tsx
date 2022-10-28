import React  from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Tab from './Tab';

export default {
	title: 'components/Tab',
	component: Tab,
	args: {
		size: 44,
		disabled: false,
		activeTab: 'tab1',
	},
} as ComponentMeta<typeof Tab>;

export const Demo: ComponentStory<typeof Tab> = (args) => {
	const [_, updateArgs] = useArgs();
	return (
		<Tab
			activeTab={args.activeTab}
			size={args.size}
			name='tab1'
			onClick={() => updateArgs({ ...args, activeTab: 'tab1' })}
			disabled={args.disabled}
		>
			Tab 1
		</Tab>
	);
};
