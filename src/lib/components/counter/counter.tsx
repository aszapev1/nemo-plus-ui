import './counter.css';

export interface CounterProps {
	className?: string;
	type: 'round' | 'oval';
	size: 16 | 20 | 24;
	variant: 'primary' | 'secondary';
	number: number;
}

const Counter = (props: CounterProps) => {
	const css = ['nemo-counter'];
	if (props.className) {
		css.push(props.className);
	}
	if (props.type) {
		css.push(`nemo-counter--${props.type}`);
	}

	if (props.size) {
		css.push(`nemo-counter--${props.size}`);
	}

	if (props.variant) {
		css.push(`nemo-counter--${props.variant}`);
	}

	const renderValue = () => {
		if (props.type === 'round') {
			return '1';
		} else {
			if (props.number > 99) {
				return '99+';
			} else {
				return props.number;
			}
		}
	};

	return <span className={css.join(' ')}>{renderValue()}</span>;
};
export default Counter;
