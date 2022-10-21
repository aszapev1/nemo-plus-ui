import Button from '../Components/Button/Button';

const PageButton = () => {
	return (
		<div className='container'>
			<div className='flex flex-col my-40'>
				<div className='flex flex-wrap gap-24'>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={44}
						variant='primary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PageButton;
