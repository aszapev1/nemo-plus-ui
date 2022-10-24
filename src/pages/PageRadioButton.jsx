import React, { useState } from 'react';
import RadioButton from '../Components/RadioButton/RadioButton';

const PageRadioButton = () => {
	const [activeRadio, setActiveRadio] = useState('');
	return (
		<div className='container'>
			<div className='flex flex-col my-40'>
				<div className='flex flex-wrap gap-24'>
					<label htmlFor='test1'>
						<RadioButton
							id='test1'
							size={16}
							value='test1'
							onChange={(event) =>
								setActiveRadio(event.target.value)
							}
							checked={activeRadio === 'test1'}
							disabled={false}
						/>
						<span>TEST 1</span>
					</label>
					<label htmlFor='test2'>
						<RadioButton
							id='test2'
							size={24}
							value='test2'
							onChange={(event) =>
								setActiveRadio(event.target.value)
							}
							checked={activeRadio === 'test2'}
							disabled={false}
						/>
						<span>TEST 2</span>
					</label>

					<label htmlFor='test3'>
						<RadioButton
							id='test3'
							size={32}
							value='test3'
							onChange={(event) =>
								setActiveRadio(event.target.value)
							}
							checked={activeRadio === 'test3'}
							disabled={false}
						/>
						<span>TEST 3</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default PageRadioButton;
