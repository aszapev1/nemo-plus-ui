import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';

export default {
	title: 'components/Link',
	component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
	<Link {...args} >Ссылка</Link>
);

export const Demo = Template.bind({});
Demo.args = {
	size: 20,
    variant: 'primary',

};