import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import './popup.css';
import PopupItem from './popupItem/popupItem';

export interface PopupTypes {
	visible: boolean;
	onVisibleChange: (value: boolean) => void;
	onOpen: 'click' | 'hover';
	className?: string;
	closeOnTriggerHidden: boolean;
	position:
		| 'auto'
		| 'top'
		| 'top-start'
		| 'top-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'left'
		| 'left-start'
		| 'left-end';
	content: React.ReactElement | React.ReactElement[];
	children: React.ReactElement;
}

const Popup = (props: PopupTypes) => {
	const {
		visible,
		onVisibleChange,
		onOpen,
		className,
		closeOnTriggerHidden,
		position,
		content,
		children,
	} = props;
	const { triggerRef, getTooltipProps, setTooltipRef, setTriggerRef } =
		usePopperTooltip({
			trigger: onOpen,
			visible: visible,
			interactive: true,
			closeOnTriggerHidden: closeOnTriggerHidden,
			onVisibleChange: onVisibleChange,
			placement: position,
			delayHide: onOpen === 'click' ? 0 : 300,
			offset: [0, 4],
		});
	const styles = ['nemo-popup'];
	if (className) {
		styles.push(className);
	}
	return (
		<>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					ref: setTriggerRef,
				});
			})}
			{visible ? (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({
						className: styles.join(' '),
						style: { width: `${triggerRef?.offsetWidth}px` },
					})}>
					<div className='nemo-popup__container'>{content}</div>
				</div>
			) : null}
		</>
	);
};

Popup.Item = PopupItem;
export default Popup;
