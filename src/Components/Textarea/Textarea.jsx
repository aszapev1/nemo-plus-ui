import PropTypes from 'prop-types';
import './Textarea.css';
const Textarea = ({
	required,
	name,
	value,
	onChange,
	placeholder,
	className,
	disabled,
	size,
	resize,
	autoFocus,
	id,
}) => {
	const css = ['nemo-textarea'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-textarea--${size}`);
	}
	if (resize) {
		css.push(`nemo-textarea--resize`);
	}
	return (
		<textarea
			id={id}
			className={css.join(' ')}
			type='text'
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

Textarea.propTypes = {
	autoFocus: PropTypes.bool,
	required: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf([88, 100, 120]),
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Textarea;
