import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from './Pagination';
import { useArgs } from '@storybook/client-api';

export default {
	title: 'components/Pagination',
	component: Pagination,
	args: {
		size: 44,
		activePage: 1,
		total: 100,
		controls: true,
	},
} as ComponentMeta<typeof Pagination>;

export const Demo: ComponentStory<typeof Pagination> = (args) => {
	const [_, updateArgs] = useArgs();

	return (
		<Pagination
			total={args.total}
			activePage={args.activePage}
			onChange={(page) => updateArgs({ ...args, activePage: page })}
			controls={args.controls}
			size={args.size}
		/>
	);
};
