import Avatar from '../Components/Avatar/Avatar';

const PageAvatar = () => {
	return (
		<div className='container'>
			<div className='flex flex-col gap-24 my-40'>
				<div className='flex flex-wrap gap-24'>
					<Avatar size={24} />
					<Avatar
						size={24}
						photo='https://nemoplus.ru/img/sale_ticets2.png'
					/>
				</div>
				<div className='flex flex-wrap gap-24'>
					<Avatar size={32} />
					<Avatar
						size={32}
						photo='https://nemoplus.ru/img/sale_ticets2.png'
					/>
				</div>
				<div className='flex flex-wrap gap-24'>
					<Avatar size={44} />
					<Avatar
						size={44}
						photo='https://nemoplus.ru/img/sale_ticets2.png'
					/>
				</div>
				<div className='flex flex-wrap gap-24'>
					<Avatar size={64} />
					<Avatar
						size={64}
						photo='https://nemoplus.ru/img/sale_ticets2.png'
					/>
				</div>
				<div className='flex flex-wrap gap-24'>
					<Avatar size={96} />
					<Avatar
						size={96}
						photo='https://nemoplus.ru/img/sale_ticets2.png'
					/>
				</div>
			</div>
		</div>
	);
};
export default PageAvatar;
