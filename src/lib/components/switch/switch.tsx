import React from 'react';
import './switch.css';

interface switchTypes {
	className?: string;
	size: 24 | 32;
	disabled?: boolean;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = (props: switchTypes) => {
	const { className, disabled, checked, onChange, size } = props;
	const css = ['nemo-switch', `nemo-switch_size_${size}`];
	if (className) {
		css.push(className);
	}

	if (disabled) {
		css.push('nemo-switch_state_disabled');
	}

	return (
		<div className={css.join(' ')}>
			<input
				className='nemo-switch_input'
				type='checkbox'
				disabled={disabled}
				checked={checked}
				onChange={onChange}
			/>
			<span className='nemo-switch_body'>
				<span className='nemo-switch_round'>
					{disabled && (
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12.9837 6.12524C12.7212 5.85805 12.4586 5.66441 12.1733 5.52132C12.1712 5.47851 12.1691 5.4358 12.1669 5.39322C12.0803 3.74606 12.0369 2.92248 11.1812 2.02846C11.1294 1.9743 11.0053 1.85652 10.9484 1.80759C10.0107 1 9.3405 1 8.00003 1C6.65957 1 5.98933 1 5.05162 1.80759C4.99481 1.85652 4.87067 1.9743 4.81883 2.02846C3.96312 2.92248 3.91982 3.74606 3.83321 5.39322C3.83098 5.43579 3.82883 5.47848 3.8268 5.52129C3.54146 5.66438 3.27882 5.85803 3.01629 6.12524C2.12135 7.03612 2.08503 7.84463 2.01239 9.46165C2.00437 9.64031 2 9.82016 2 10C2 10.1798 2.00437 10.3597 2.01239 10.5384C2.08503 12.1554 2.12135 12.9639 3.01629 13.8748C3.91122 14.7856 4.80735 14.8418 6.59961 14.954C7.05656 14.9826 7.52828 15 8 15C8.47172 15 8.94344 14.9826 9.4004 14.954C11.1927 14.8418 12.0888 14.7856 12.9837 13.8748C13.8786 12.9639 13.915 12.1554 13.9876 10.5384C13.9956 10.3597 14 10.1798 14 10C14 9.82016 13.9956 9.64031 13.9876 9.46165C13.915 7.84463 13.8786 7.03612 12.9837 6.12524ZM5.90245 3.06566C5.51361 3.47191 5.432 3.71466 5.34939 5.1401C5.71451 5.10144 6.12573 5.07568 6.59961 5.046C7.05656 5.01738 7.52828 5 8 5C8.47172 5 8.94344 5.01738 9.40039 5.046C9.87429 5.07568 10.2855 5.10144 10.6507 5.14011C10.5681 3.71466 10.4865 3.47191 10.0976 3.06566L10.0983 3.0664C9.87307 2.84292 9.61616 2.63582 9.29855 2.56493C9.04125 2.50751 8.72132 2.5 8.00003 2.5C7.27875 2.5 6.95882 2.50751 6.70152 2.56493C6.38739 2.63504 6.12322 2.84071 5.90163 3.06651L5.90245 3.06566ZM9 10C9 9.44771 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10Z'
								fill='var(--icons-tertiary)'
							/>
						</svg>
					)}
				</span>
			</span>
		</div>
	);
};

export default Switch;
