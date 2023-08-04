import InputText from './inputText';
import InputPassword from './inputPassword';
import { inputTypes } from './types';
import './input.css';

const Input = (props: inputTypes) => {
	const { type } = props;
	switch (type) {
		case 'text':
			return <InputText {...props} />;
		case 'password':
			return <InputPassword {...props} />;
		default:
			return <p>Кажется вы забыли передать обязательные параметры</p>;
	}
};
export default Input;
