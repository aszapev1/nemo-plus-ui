import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import Loader from '../Loader/Loader';
const Button = React.forwardRef(
	(
		{
			autoFocus,
			type,
			className,
			children,
			disabled,
			name,
			onClick,
			onFocus,
			onBlur,
			loading,
			size,
			variant,
		},
		ref
	) => {
		const css = ['nemo-button'];
		if (className) {
			css.push(className);
		}
		if (loading) {
			css.push('nemo-button--loading');
		}

		if (size) {
			css.push(`nemo-button--${size}`);
		}

		if (variant) {
			css.push(`nemo-button--${variant}`);
		}
		return (
			<button
				className={css.join(' ')}
				type={type}
				ref={ref}
				autoFocus={autoFocus}
				disabled={disabled}
				name={name}
				onClick={onClick || null}
				onFocus={onFocus || null}
				onBlur={onBlur || null}>
				<div className='nemo-button_container'>
					{loading && (
						<Loader
							className='nemo-button_loader'
							size={size === 32 ? 16 : 24}
							variant={
								variant === 'primary' ? 'white' : 'default'
							}
						/>
					)}
					<div className='nemo-button-container'>
						<span className='font font-medium text2 nemo-button-children'>
							{children}
						</span>
					</div>
				</div>
			</button>
		);
	}
);

Button.propTypes = {
	type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	autoFocus: PropTypes.bool,
	name: PropTypes.string,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	size: PropTypes.oneOf([24, 32, 44, 52]).isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost'])
		.isRequired,
};
export default Button;
