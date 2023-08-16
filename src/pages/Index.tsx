import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Template from '../templates/Template';
import Colors from './colors/Colors';
import TypographyPage from './typography';
import AvatarPage from './avatar';
import ButtonsPage from './buttons';
import LoaderPage from './loader';
import DividerPage from './divider';
import CounterPage from './counter';
import TextareaPage from './textarea';
import InputPage from './input';
import RadioPage from './radio';
import BadgesPage from './badges';
import IconsPage from './icons';
import PaginationPage from './pagination';
import SwitchPage from './switch';
import LinkPage from './link';
import SelectPage from './select';
import React from 'react';
import ModalPage from './modal';
import TabPage from './tab';

const Index = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Template />}>
				<Route path='/' element={<Home />} />
				<Route path='/avatar' element={<AvatarPage />} />
				<Route path='/badges' element={<BadgesPage />} />
				<Route path='/colors' element={<Colors />} />
				<Route path='/typography' element={<TypographyPage />} />
				<Route path='/buttons' element={<ButtonsPage />} />
				<Route path='/counters' element={<CounterPage />} />
				<Route path='/divider' element={<DividerPage />} />
				<Route path='/icons' element={<IconsPage />} />
				<Route path='/input' element={<InputPage />} />
				<Route path='/link' element={<LinkPage />} />
				<Route path='/loader' element={<LoaderPage />} />
				<Route path='/modal' element={<ModalPage />} />
				<Route path='/pagination' element={<PaginationPage />} />
				<Route path='/radio' element={<RadioPage />} />
				<Route path='/select' element={<SelectPage />} />
				<Route path='/switch' element={<SwitchPage />} />
				<Route path='/tabs' element={<TabPage />} />
				<Route path='/textarea' element={<TextareaPage />} />
			</Route>
		</Routes>
	);
};
export default Index;
