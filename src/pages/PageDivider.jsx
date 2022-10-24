import Divider from '../Components/Divider/Divider';
const PageDivider = () => {
	return (
		<div className='container'>
			<div className='flex flex-col my-40 gap-24'>
				<Divider />
				<Divider margin />
			</div>
		</div>
	);
};
export default PageDivider;
