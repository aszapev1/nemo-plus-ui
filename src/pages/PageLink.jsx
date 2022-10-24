import Link from '../Components/Link/Link';

const PageLink = () => {
	return (
		<div className='container'>
			<div className='flex flex-col my-40 gap-24'>
				<div className='flex flex-wrap gap-8'>
					<Link size={16} variant='primary'>
						Test
					</Link>
					<Link size={16} variant='secondary'>
						Test
					</Link>
				</div>
				<div className='flex flex-wrap gap-8'>
					<Link size={20} variant='primary'>
						Test
					</Link>
					<Link size={20} variant='secondary'>
						Test
					</Link>
				</div>
				<div className='flex flex-wrap gap-8'>
					<Link size={24} variant='primary'>
						Test
					</Link>
					<Link size={24} variant='secondary'>
						Test
					</Link>
				</div>
			</div>
		</div>
	);
};
export default PageLink;
