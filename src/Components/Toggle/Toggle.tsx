import React from 'react';
import './Toggle.css';

export type Props = {
	className?: string;
	size: 16 | 24 | 32;
	disabled?: boolean;
	checked: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Toggle = (props: Props) => {
	const { className, size, disabled, checked, onChange } = props;
	const css = ['nemo-toggle'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-toggle--${size}`);
	}
	return (
		<label className={css.join(' ')}>
			<input
				type='checkbox'
				disabled={disabled}
				checked={checked}
				onChange={onChange}
			/>
			<span className='nemo-toggle_body'>
				<span className='nemo-toggle_round' />
			</span>
		</label>
	);
};
export default Toggle;
