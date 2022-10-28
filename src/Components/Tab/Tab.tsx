import React from 'react';
import './Tab.css';

export interface TabProps {
	className?: string;
	children: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	size: 44 | 52 | 72;
	activeTab: string;
	name: string;
	disabled?: boolean;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
	const { className, size, activeTab, name, disabled, onClick, children } =
		props;
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
			onClick={onClick}
		>
			<div className='nemo-tab-container'>
				<span className='font font-medium nemo-tab-children'>
					{children}
				</span>
			</div>
		</button>
	);
});
export default Tab;
