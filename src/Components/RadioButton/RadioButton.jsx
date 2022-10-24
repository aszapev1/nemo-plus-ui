import PropTypes from 'prop-types';
import './RadioButton.css';
const RadioButton = ({
	className,
	size,
	value,
	checked,
	onChange,
	disabled,
	id,
}) => {
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
RadioButton.propTypes = {
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	className: PropTypes.string,
	size: PropTypes.oneOf([16, 24, 32]).isRequired,
	id: PropTypes.string,
};
export default RadioButton;
