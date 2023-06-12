import React from 'react';
import Icon from '../Icon/Icon';
import './IconButton.css';

export type iconButtonProps = {
	className?: string;
	variant: 'primary' | 'secondary' | 'ghost' | 'outline';
	iconTurn: 'up' | 'right' | 'down' | 'left';
	round?: boolean;
	icon: string;
	size: 24 | 32 | 44 | 52;
	name?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
};

const IconButton = (props: iconButtonProps) => {
	const {
		className,
		variant,
		round,
		icon,
		size,
        name,
		onClick,
		disabled,
		iconTurn,
	} = props;
	const css = [
		'nemo-icon-button',
		`nemo-icon-button--${variant}`,
		`nemo-icon-button--${size}`,
	];
	if (className) {
		css.push(className);
	}

	if (round) {
		css.push('nemo-icon-button--round');
	}

	return (
		<button
			type='button'
			onClick={onClick}
			disabled={disabled}
			className={css.join(' ')}
            name={name}
		>
			<Icon height={size - 8} width={size - 8} turn={iconTurn} variant={icon}  />
		</button>
	);
};
export default IconButton;
