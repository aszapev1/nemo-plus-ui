import React from 'react';
import './Divider.css';

export interface DividerProps {
	className?: string;
	margin?: boolean;
}

const Divider = (props: DividerProps) => {
	const styles = ['nemo-divider'];

	if (typeof props.className !== 'undefined') {
		styles.push(props.className);
	}
	if (props.margin) {
		styles.push('nemo-divider--margine-stroke');
	}
	return (
		<div className={styles.join(' ')}>
			<hr />
		</div>
	);
};
export default Divider;
