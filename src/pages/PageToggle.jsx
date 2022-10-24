import React, { useState } from 'react';
import Toggle from '../Components/Toggle/Toggle';

const PageToggle = () => {
	const [isActive, setIsActive] = useState(false);
	const [isActive24, setIsActive24] = useState(false);
	const [isActive32, setIsActive32] = useState(false);
	return (
		<div className='container'>
			<div className='flex flex-col my-40 gap-24'>
				<div className='flex flex-wrap gap-12 item-end'>
					<Toggle
						size={16}
						checked={isActive}
						onChange={(event) => setIsActive(event.target.checked)}
					/>

					<Toggle
						size={24}
						checked={isActive24}
						onChange={(event) =>
							setIsActive24(event.target.checked)
						}
					/>

					<Toggle
						size={32}
						checked={isActive32}
						onChange={(event) =>
							setIsActive32(event.target.checked)
						}
					/>
				</div>
			</div>
		</div>
	);
};
export default PageToggle;
