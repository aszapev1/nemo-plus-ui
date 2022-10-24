import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ className, number, type, size, variant }) => {
	const [counter, setCounter] = useState(1);
	const css = ['nemo-counter font font-medium'];
	if (className) {
		css.push(className);
	}
	if (type) {
		css.push(`nemo-counter--${type}`);
	}

	if (size) {
		css.push(`nemo-counter--${size}`);
	}

	if (variant) {
		css.push(`nemo-counter--${variant}`);
	}

	useEffect(() => {
		if (type === 'round') {
			setCounter(1);
		} else {
			if (number > 99) {
				setCounter(`99+`);
			}
		}
	}, [type, number]);

	return <span className={css.join(' ')}>{counter}</span>;
};

Counter.propTypes = {
	className: PropTypes.string,
	number: PropTypes.number.isRequired,
	type: PropTypes.oneOf(['round', 'oval']).isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	size: PropTypes.oneOf([16, 20, 24]).isRequired,
};
export default Counter;
