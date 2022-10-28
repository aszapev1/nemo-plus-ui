import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './Divider';

export default {
	title: 'components/Divider',
	component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
	<Divider {...args} />
);

export const Demo = Template.bind({});
Demo.args = {
	margin: false
};