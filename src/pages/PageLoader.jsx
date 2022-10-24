import Loader from '../Components/Loader/Loader';

const PageLoader = () => {
	return (
		<div className='container'>
			<div className='flex flex-wrap my-32 gap-12'>
				<Loader size={40} />
				<Loader size={24} />
				<Loader size={16} />
			</div>
		</div>
	);
};
export default PageLoader;
