import React from 'react';
import { inputTypes } from './types';

const InputText = React.forwardRef<HTMLInputElement, inputTypes>(
	(props, ref) => {
		const {
			size,
			value,
			onChange,
			id,
			name,
			placeholder,
			required,
			disabled,
			autoFocus,
			className,
			maxLength,
			minLength,
		} = props;
		const styles = ['nemo-input', `nemo-input_size_${size}`];
		if (className) {
			styles.push(className);
		}
		return (
			<input
				className={styles.join(' ')}
				ref={ref}
				type='text'
				value={value}
				onChange={(event) => onChange(event)}
				id={id}
				name={name}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				maxLength={maxLength}
				minLength={minLength}
				autoFocus={autoFocus}
			/>
		);
	}
);
export default InputText;
