import React from 'react';
import Loader from '../Loader';
import './Button.css';
export interface ButtonProps {
	className?: string;
	loading?: boolean;
	size: 32 | 44 | 52 | 72;
	variant: 'primary' | 'secondary' | 'outline' | 'ghost';
	type: 'button' | 'submit' | 'reset';
	autoFocus?: boolean;
	disabled?: boolean;
	name?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children: string | number;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			className,
			loading,
			size,
			variant,
			type,
			autoFocus,
			disabled,
			name,
			onClick,
			children,
		} = props;
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
				disabled={disabled || loading}
				name={name}
				onClick={onClick}
			>
				<div className='nemo-button_container'>
					{loading && (
						<Loader
							className='nemo-button_loader'
							size={size === 32 ? 16 : 24}
							variant={variant === 'primary' ? 'white' : 'black'}
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
export default Button;
