import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

const Toggle = ({ className, size, disabled, checked, onChange }) => {
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

Toggle.propTypes = {
	className: PropTypes.string,
	checked: PropTypes.bool.isRequired,
	disabled: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	size: PropTypes.oneOf([16, 24, 32]),
};

Toggle.defaultProps = {
	size: 24,
};
export default Toggle;
