import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Counter from './Counter';

export default {
	title: 'components/Counter',
	component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
	<Counter {...args} />
);

export const Demo = Template.bind({});
Demo.args = {
	type: 'round',
	size: 20,
	variant: 'primary',
	number: 10,
};
