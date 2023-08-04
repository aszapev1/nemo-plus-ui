import React from 'react';
import './popupItem.css';

export interface PopupItemTypes {
	className?: string;
	children: React.ReactElement[] | React.ReactElement;
	tabIndex?: number;
	onClick?: () => void;
	onMouseOver?: (event: React.MouseEvent<HTMLDivElement>) => void;
	onMouseOut?: (event: React.MouseEvent<HTMLDivElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
}

const PopupItem = (props: PopupItemTypes) => {
	const {
		className,
		children,
		tabIndex,
		onClick,
		onMouseOver,
		onMouseOut,
		onFocus,
		onBlur,
	} = props;
	const styles = ['nemo-popup_item'];
	if (className) {
		styles.push(className);
	}
	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (onClick && (event.code === 'Enter' || event.code === 'Space')) {
			onClick();
		}
	};

	return (
		<div
			className={styles.join(' ')}
			tabIndex={tabIndex}
			onClick={onClick}
			onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
				handleKeyDown(event)
			}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			onFocus={onFocus}
			onBlur={onBlur}>
			{children}
		</div>
	);
};
export default PopupItem;
