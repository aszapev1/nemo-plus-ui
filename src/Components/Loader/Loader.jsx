import PropTypes from 'prop-types';
import './Loader.css';
const Loader = ({ className, size, variant }) => {
	const css = ['nemo-loader'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-loader--${size}`);
	}

	if (variant) {
		css.push(`nemo-loader--${variant}`);
	}
	return (
		<div className={css.join(' ')}>
			<span className='nemo-loader_trait' />
			<span className='nemo-loader_trait' />
			<span className='nemo-loader_trait' />
		</div>
	);
};

Loader.propTypes = {
	className: PropTypes.string,
	size: PropTypes.oneOf([16, 24, 40]).isRequired,
	variant: PropTypes.oneOf(['default', 'white']).isRequired,
};

Loader.defaultProps = {
	size: 24,
	variant: 'default',
};

export default Loader;
