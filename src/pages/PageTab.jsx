import React, { useState } from 'react';
import Tab from '../Components/Tab/Tab';

const PageTab = () => {
	const [activeTab, setActiveTab] = useState('home');
	const [activeTab52, setActiveTab52] = useState('home52');
	const [activeTab72, setActiveTab72] = useState('home72');
	return (
		<div className='container'>
			<div className='flex flex-col my-32 gap-40'>
				<div className='flex flex-wrap gap-24'>
					<Tab
						name='home'
						activeTab={activeTab}
						size={44}
						onClick={(name) => setActiveTab(name)}>
						Главная
					</Tab>
					<Tab
						name='song'
						activeTab={activeTab}
						size={44}
						onClick={(name) => setActiveTab(name)}>
						Песни о главном
					</Tab>
					<Tab
						name='blog'
						activeTab={activeTab}
						size={44}
						onClick={(name) => setActiveTab(name)}>
						Блог о путешествиях
					</Tab>
				</div>
				<div className='flex flex-wrap gap-24 tset'>
					<Tab
						name='home52'
						activeTab={activeTab52}
						size={52}
						onClick={(name) => setActiveTab52(name)}>
						Главная
					</Tab>
					<Tab
						name='song52'
						activeTab={activeTab52}
						size={52}
						onClick={(name) => setActiveTab52(name)}>
						Песни о главном
					</Tab>
					<Tab
						name='blog52'
						activeTab={activeTab52}
						size={52}
						onClick={(name) => setActiveTab52(name)}>
						Блог о путешествиях
					</Tab>
				</div>
				<div className='flex flex-wrap gap-24'>
					<Tab
						name='home72'
						activeTab={activeTab72}
						size={72}
						onClick={(name) => setActiveTab72(name)}>
						Главная
					</Tab>
					<Tab
						name='song72'
						activeTab={activeTab72}
						size={72}
						onClick={(name) => setActiveTab72(name)}>
						Песни о главном
					</Tab>
					<Tab
						name='blog72'
						activeTab={activeTab72}
						size={72}
						onClick={(name) => setActiveTab72(name)}>
						Блог о путешествиях
					</Tab>
				</div>
			</div>
		</div>
	);
};
export default PageTab;
