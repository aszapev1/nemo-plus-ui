import React from 'react';
import InputText from './inputText';
import InputPassword from './inputPassword';
import { inputTypes } from './types';
import './input.css';

const Input = React.forwardRef<HTMLInputElement, inputTypes>((props, ref) => {
	const { type } = props;
	switch (type) {
		case 'text':
			return <InputText {...props} ref={ref} />;
		case 'password':
			return <InputPassword {...props} ref={ref} />;
		default:
			return <p>Кажется вы забыли передать обязательные параметры</p>;
	}
});
export default Input;
