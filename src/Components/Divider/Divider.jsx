import React from 'react';
import PropTypes from 'prop-types';
import './Divider.css';

const Divider = (props) => {
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

Divider.propTypes = {
	className: PropTypes.string,
	margin: PropTypes.bool,
};

Divider.defaultProps = {
	margin: false,
};

export default Divider;
