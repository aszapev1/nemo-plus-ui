import Counter from '../Components/Counter/Counter';

const PageCounter = () => {
	return (
		<div className='container'>
			<div className='flex flex-col gap-24 my-40'>
				<div className='flex flex-wrap gap-12'>
					<Counter
						size={16}
						variant='primary'
						type='round'
						number={5000}
					/>
					<Counter
						size={16}
						variant='secondary'
						type='round'
						number={5000}
					/>
					<Counter
						size={16}
						variant='primary'
						type='oval'
						number={5000}
					/>
					<Counter
						size={16}
						variant='secondary'
						type='oval'
						number={5000}
					/>
				</div>
				<div className='flex flex-wrap gap-12'>
					<Counter
						size={20}
						variant='primary'
						type='round'
						number={5000}
					/>
					<Counter
						size={20}
						variant='secondary'
						type='round'
						number={5000}
					/>
					<Counter
						size={20}
						variant='primary'
						type='oval'
						number={5000}
					/>
					<Counter
						size={20}
						variant='secondary'
						type='oval'
						number={5000}
					/>
				</div>
				<div className='flex flex-wrap gap-12'>
					<Counter
						size={24}
						variant='primary'
						type='round'
						number={5000}
					/>
					<Counter
						size={24}
						variant='secondary'
						type='round'
						number={5000}
					/>
					<Counter
						size={24}
						variant='primary'
						type='oval'
						number={5000}
					/>
					<Counter
						size={24}
						variant='secondary'
						type='oval'
						number={5000}
					/>
				</div>
			</div>
		</div>
	);
};
export default PageCounter;
