import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from './IconButton';

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'components/IconButton',
	component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
	<IconButton {...args} />
);

export const Demo = Template.bind({});
Demo.args = {
	size: 44,
	variant: 'primary',
	name: 'button',
	disabled: false,
    round: false,
    iconTurn: 'up',
    icon: 'arrow',
	onClick: () => console.log('test click'),
};
