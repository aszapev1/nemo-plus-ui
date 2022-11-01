import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';

export default {
	title: 'icons/Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Arrow = Template.bind({});
Arrow.args = {
	width: 24,
	height: 24,
	variant: 'arrow',
	turn: 'up',
};

export const Close = Template.bind({});
Close.args = {
	width: 24,
	height: 24,
	variant: 'close',
	turn: 'up',
};
