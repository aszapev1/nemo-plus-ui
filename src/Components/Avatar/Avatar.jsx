import PropTypes from 'prop-types';
import avatar from './Avatar.jpg';
import './Avatar.css';
const Avatar = ({ className, size, photo }) => {
	const css = ['nemo-avatar'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-avatar--${size}`);
	}
	return (
		<img
			className={css.join(' ')}
			src={photo ? photo : avatar}
			alt='Фотография пользователя'
		/>
	);
};
Avatar.propTypes = {
	className: PropTypes.string,
	photo: PropTypes.string,
	size: PropTypes.oneOf([24, 32, 44, 64, 96]).isRequired,
};
export default Avatar;
