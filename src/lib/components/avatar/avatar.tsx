import img from '../../assets/default-avatar.jpg';
import './avatar.css';
export interface AvatarProps {
	className?: string;
	photo?: string;
	size: 24 | 32 | 44 | 64 | 96;
}
const Avatar = (props: AvatarProps) => {
	const css = ['nemo-avatar'];
	if (props.className) {
		css.push(props.className);
	}
	if (props.size) {
		css.push(`nemo-avatar--${props.size}`);
	}
	return (
		<img
			className={css.join(' ')}
			src={props.photo ? props.photo : img}
			alt='Фотография пользователя'
		/>
	);
};
export default Avatar;
