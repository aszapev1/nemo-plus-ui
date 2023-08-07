import React from 'react';
import './button.css';
interface buttonTypes {
	size: 24 | 32 | 44 | 52 | 72;
	variant: 'primary' | 'secondary';
	type: 'button' | 'submit';
	children: React.ReactElement[] | React.ReactElement;
	className?: string;
	disabled?: boolean;
	loader?: React.ReactElement;
	loading?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	full?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, buttonTypes>(
	(props, ref) => {
		const {
			size,
			variant,
			type,
			children,
			className,
			disabled,
			loader,
			loading,
			full,
			onClick,
		} = props;
		const styles = [
			'nemo-button',
			`nemo-button_size_${size}`,
			`nemo-button_variant_${variant}`,
		];
		if (className) {
			styles.push(className);
		}
		if (loading) {
			styles.push('nemo-button_loading');
		}
		if (full) {
			styles.push('nemo-button_full');
		}

		return (
			<button
				type={type}
				className={styles.join(' ')}
				ref={ref}
				disabled={disabled}
				onClick={onClick}>
				<div className='nemo-button__body'>
					{loading && (
						<div className='nemo-button__loader'>{loader}</div>
					)}
					<div className='nemo-button__content'>{children}</div>
				</div>
			</button>
		);
	}
);
export default Button;
