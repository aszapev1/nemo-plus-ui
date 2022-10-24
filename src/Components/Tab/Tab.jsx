import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
const Tab = React.forwardRef(
	(
		{ className, size, children, disabled, name, activeTab, onClick },
		ref
	) => {
		const css = ['nemo-tab'];
		if (className) {
			css.push(className);
		}

		if (size) {
			css.push(`nemo-tab--${size}`);
		}
		if (name === activeTab) {
			css.push('active');
		}
		return (
			<button
				ref={ref}
				type='button'
				name={name}
				className={css.join(' ')}
				disabled={disabled}
				onClick={(event) => onClick(name, event)}>
				<div className='nemo-tab-container'>
					<span className='font font-medium nemo-tab-children'>
						{children}
					</span>
				</div>
			</button>
		);
	}
);

Tab.propTypes = {
	className: PropTypes.string,
	size: PropTypes.oneOf([44, 52, 72]),
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	disabled: PropTypes.bool,
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	onClick: PropTypes.func.isRequired,
};
export default Tab;
