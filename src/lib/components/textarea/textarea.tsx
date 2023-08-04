import React from 'react';
import './textarea.css';

export interface TextareaProps {
	className?: string;
	size: 88 | 100 | 120;
	resize?: boolean;
	id?: string;
	autoFocus?: boolean;
	required?: boolean;
	name?: string;
	value: string;
	placeholder?: string;
	disabled?: boolean;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = (props: TextareaProps) => {
	const {
		className,
		size,
		resize,
		id,
		autoFocus,
		required,
		name,
		value,
		onChange,
		placeholder,
		disabled,
	} = props;
	const css = ['nemo-textarea', `nemo-textarea--${size}`];
	if (className) {
		css.push(className);
	}
	if (resize) {
		css.push(`nemo-textarea--resize`);
	}
	return (
		<textarea
			id={id}
			className={css.join(' ')}
			autoFocus={autoFocus}
			required={required}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
		/>
	);
};

export default Textarea;
