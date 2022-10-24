import React, { useState } from 'react';
import Textarea from '../Components/Textarea/Textarea';

const PageTextarea = () => {
	const [textarea, setTextarea] = useState('');
	return (
		<div className='container'>
			<div className='flex flex-col my-40 gap-24'>
				<Textarea
					size={88}
					value={textarea}
					onChange={(event) => setTextarea(event.target.value)}
					placeholder='text placeholder'
					disabled={false}
					resize={true}
				/>
				<Textarea
					size={100}
					value={textarea}
					onChange={(event) => setTextarea(event.target.value)}
					placeholder='text placeholder'
					disabled={false}
					resize={true}
				/>
				<Textarea
					size={120}
					value={textarea}
					onChange={(event) => setTextarea(event.target.value)}
					placeholder='text placeholder'
					disabled={false}
					resize={true}
				/>
			</div>
		</div>
	);
};
export default PageTextarea;
