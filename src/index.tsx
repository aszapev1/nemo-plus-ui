import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import reportWebVitals from './reportWebVitals';
import './lib/components/base/main.css';
import './index.css';
import React from 'react';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Index />
	</BrowserRouter>
);

reportWebVitals();
