import { Outlet } from 'react-router-dom';
import Box from '../lib/components/box/box';
import Header from '../components/header/header';
import Aside from '../components/aside/aside';
import styles from './Temlate.module.scss'
import React from 'react';

const Template = () => {
	return (
		<Box type='column' className='content'>
			<Header />
			<Box tag='main' className='container' type='column'>
				<Box>
					<Aside />
					<Box className={styles.wrapper}>
						<Outlet />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
export default Template;
