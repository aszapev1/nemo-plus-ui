import PropTypes from 'prop-types';
import './Link.css';
const Link = ({ children, href, size, className, variant, onClick }) => {
	const css = ['nemo-link'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-link--${size}`);
	}

	if (variant) {
		css.push(`nemo-link--${variant}`);
	}
	return (
		<div className={css.join(' ')}>
			<a
				className='nemo-link--component'
				href={href}
				onClick={onClick || null}>
				{children}
			</a>
		</div>
	);
};

Link.propTypes = {
	className: PropTypes.string,
	size: PropTypes.oneOf([16, 20, 24]).isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

export default Link;
