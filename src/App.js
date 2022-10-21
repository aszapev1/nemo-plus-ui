import { Routes, Route } from 'react-router-dom';
import './Components/Base/Base.css';
import PageButton from './pages/PageButtons';
import PageIndex from './pages/PageIndex';
import PageLoader from './pages/PageLoader';

function App() {
	return (
		<Routes>
			<Route path='/' element={<PageIndex />} />
			<Route path='/button' element={<PageButton />} />
			<Route path='/loader' element={<PageLoader />} />
		</Routes>
	);
}

export default App;
