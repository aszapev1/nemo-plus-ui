import React from 'react';
import './Radio.css';

export interface PadioProps {
	className?: string;
	size: 16 | 24 | 32;
	value: string;
	checked: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
	id?: string;
}

const Radio = (props: PadioProps) => {
	const { className, size, value, checked, onChange, disabled, id } = props;
	const css = ['nemo-radio-button'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-radio-button--${size}`);
	}
	return (
		<div className={css.join(' ')}>
			<input
				className='nemo-radio-button_control'
				type='radio'
				value={value}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				id={id}
			/>
			<span className='nemo-radio-button_indicator' />
		</div>
	);
};

export default Radio;
