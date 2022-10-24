import PropTypes from 'prop-types';
import './Badge.css';
const Badge = ({ className, children, size, variant }) => {
	const css = ['nemo-badge'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-badge--${size}`);
	}
	if (variant) {
		css.push(`nemo-badge--${variant}`);
	}
	return (
		<div className={css.join(' ')}>
			<span className='font font-medium nemo-badge-children'>
				{children}
			</span>
		</div>
	);
};

Badge.propTypes = {
	className: PropTypes.string,
	size: PropTypes.oneOf([24, 32, 44]).isRequired,
	variant: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'negative',
		'warning',
		'info',
		'light',
		'dark',
	]).isRequired,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};

export default Badge;
