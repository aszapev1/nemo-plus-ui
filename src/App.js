import { Routes, Route } from 'react-router-dom';
import './Components/Base/Base.css';
import PageAvatar from './pages/PageAvatar';
import PageBadge from './pages/PageBadge';
import PageButton from './pages/PageButtons';
import PageCounter from './pages/PageCounter';
import PageDivider from './pages/PageDivider';
import PageIndex from './pages/PageIndex';
import PageLink from './pages/PageLink';
import PageLoader from './pages/PageLoader';
import PageRadioButton from './pages/PageRadioButton';
import PageToggle from './pages/PageToggle';
import PageTab from './pages/PageTab';
import PageTextarea from './pages/PageTextarea';

function App() {
	return (
		<Routes>
			<Route path='/' element={<PageIndex />} />
			<Route path='/button' element={<PageButton />} />
			<Route path='/loader' element={<PageLoader />} />
			<Route path='/badge' element={<PageBadge />} />
			<Route path='/tab' element={<PageTab />} />
			<Route path='/counter' element={<PageCounter />} />
			<Route path='/avatar' element={<PageAvatar />} />
			<Route path='/radio' element={<PageRadioButton />} />
			<Route path='/divider' element={<PageDivider />} />
			<Route path='/link' element={<PageLink />} />
			<Route path='/toggle' element={<PageToggle />} />
			<Route path='/textarea' element={<PageTextarea />} />
		</Routes>
	);
}

export default App;
