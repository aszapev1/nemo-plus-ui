import { ReactElement } from 'react';
import './modal.css';
import Button from '../button/button';
import Icon from '../icon/icon';
import Text from '../text/text';

interface modalTypes {
	className?: string;
	onClick: () => void;
	children: ReactElement | ReactElement[];
	title: string;
	maxWidth?: string;
}

const Modal = (props: modalTypes) => {
	const { className, onClick, children, title, maxWidth } = props;
	const css = ['nemo-modal'];
	if (className) {
		css.push(className);
	}

	return (
		<div className={css.join(' ')}>
			<div className='nemo-modal__overlay' onClick={onClick} />
			<div
				className='nemo-modal__container'
				style={{ maxWidth: `${maxWidth}` }}>
				<div className='nemo-modal__title'>
					<Text tag='h2' weight='medium' size={20} lineHeight={24} className='nemo-modal__text'>
						{title}
					</Text>
					<Button
						onClick={onClick}
						type='button'
						size={32}
						variant='secondary'
						className='nemo-modal_button'>
						<Icon
							width={24}
							height={24}
							variant='outline'
							name='Close'
						/>
					</Button>
				</div>
				<div className='nemo-modal__content'>{children}</div>
			</div>
		</div>
	);
};
export default Modal;
