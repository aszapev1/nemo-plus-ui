import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './Badge';

export default {
	title: 'components/Badge',
	component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}>Badge</Badge>;

export const Demo = Template.bind({});
Demo.args = {
	size: 24,
};
