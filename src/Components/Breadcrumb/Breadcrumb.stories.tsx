import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

export default {
	title: 'components/Breadcrumb',
	component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
	<Breadcrumb size={args.size} variant={args.variant}>
		<Breadcrumb.Item href='/?path=/story/components-link--demo'>Главная</Breadcrumb.Item>
		<Breadcrumb.Item>Divider</Breadcrumb.Item>
	</Breadcrumb>
);

export const Demo = Template.bind({});
Demo.args = {
	size: 20,
	variant: 'secondary',
};
