import React from 'react';
import './select.css';
import Icon from '../icon/icon';
import Chip from '../chip/chip';
interface selectTypes {
	className?: string;
	size: 32 | 44 | 52 | 72;
	placeholder: string;
	value: { id: number | string; title: string }[];
	isOpen: boolean;
	disabled?: boolean;
	full?: boolean;
	tabIndex?: number;
	onClick?: () => void;
	onClickChip?: (id: string | number) => void;
}
const Select = React.forwardRef<HTMLDivElement, selectTypes>((props, ref) => {
	const {
		className,
		size,
		value,
		placeholder,
		isOpen,
		disabled,
		full,
		tabIndex,
		onClick,
		onClickChip,
	} = props;
	const css = ['nemo-select', `nemo-select_size_${size}`];
	if (className) {
		css.push(className);
	}
	if (isOpen) {
		css.push('nemo-select_state_open');
	}

	if (full) {
		css.push('nemo-select_width_full');
	}

	if (disabled) {
		css.push('nemo-select_state_disabled');
	}

	const handleClick = () => {
		if (!disabled && onClick) {
			onClick();
		}
	};

	const handleClickChip = (event: React.MouseEvent<HTMLDivElement>, id: number | string) => {
		event.stopPropagation();
		if (!disabled && onClickChip) {
			onClickChip(id);
		}
	};

	return (
		<div
			className={css.join(' ')}
			ref={ref}
			onClick={handleClick}
			tabIndex={tabIndex}>
			<div className='nemo-select_container'>
				<div className='nemo-select_option'>
					{value.length > 0 ? (
						<span className='nemo-select_text nemo-select_value'>
							{value.map((option) => (
								<Chip
									key={option.id}
									onClick={(event) => handleClickChip(event, option.id)}
									size={20}
									variant='primary'
									icon={
										<Icon
											variant='outline'
											width={14}
											height={14}
											name='Close'
										/>
									}>
									{option.title}
								</Chip>
							))}
							{/* {value.map((option) => option.title).join(', ')} */}
						</span>
					) : (
						<span className='nemo-select_placeholder nemo-select_text'>
							{placeholder}
						</span>
					)}
				</div>
				<Icon
					variant='outline'
					width={24}
					height={24}
					name={isOpen ? 'ChevronUp' : 'ChevronDown'}
				/>
			</div>
		</div>
	);
});
export default Select;
