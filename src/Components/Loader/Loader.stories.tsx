import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

export default {
	title: 'components/Loader',
	component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
	<Loader {...args} />
);

export const Demo = Template.bind({});
Demo.args = {
	size: 40,
    variant: 'default'
};