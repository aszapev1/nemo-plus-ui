import Button from '../Components/Button/Button';

const PageButton = () => {
	return (
		<div className='container'>
			<div className='flex flex-col my-40 gap-12'>
				<div className='flex flex-wrap gap-24 item-end'>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={32}
						variant='primary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={44}
						variant='primary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						disabled={true}
						size={52}
						variant='primary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={true}
						size={72}
						variant='primary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
				</div>
				<div className='flex flex-wrap gap-24 item-end'>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={32}
						variant='secondary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={44}
						variant='secondary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={52}
						disabled={true}
						variant='secondary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={true}
						size={72}
						variant='secondary'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
				</div>
				<div className='flex flex-wrap gap-24 item-end'>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={32}
						variant='outline'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={44}
						variant='outline'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						disabled={true}
						size={52}
						variant='outline'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={true}
						size={72}
						variant='outline'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
				</div>
				<div className='flex flex-wrap gap-24 item-end'>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={32}
						variant='ghost'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						size={44}
						variant='ghost'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={false}
						disabled={true}
						size={52}
						variant='ghost'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
					<Button
						type='button'
						name='button1'
						loading={true}
						size={72}
						variant='ghost'
						onClick={() => console.log('click')}>
						Кнопка
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PageButton;
