import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Textarea from './Textarea';

export default {
	title: 'components/Textarea',
	component: Textarea,
	args: {
		size: 88,
		resize: false,
		required: false,
		value: '',
		placeholder: 'Введите текст',
		disabled: false,
		autoFocus: false,
	},
} as ComponentMeta<typeof Textarea>;

export const Demo: ComponentStory<typeof Textarea> = (args) => {
	const [textarea, setTextarea] = useState(args.value);
	const handlerOnChangeTextarea = (value: React.SetStateAction<string>) => {
		setTextarea(value);
	};
	return (
		<Textarea
			size={args.size}
			resize={args.resize}
			required={args.required}
			value={textarea}
			placeholder={args.placeholder}
			onChange={(event) => handlerOnChangeTextarea(event.target.value)}
			autoFocus={args.autoFocus}
            disabled={args.disabled}
		/>
	);
};
