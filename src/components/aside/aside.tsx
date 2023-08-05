import { NavLink } from 'react-router-dom';
import styles from './aside.module.scss';
import { asideData } from '../../data/asideData';
import React from 'react';
const Aside = () => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<aside className={styles.wrapper}>
			{asideData.map((item) => (
				<NavLink
					key={item.name}
					onClick={handleClick}
					to={`${item.link}`}
					className={({ isActive }) =>
						isActive ? styles.linkActive : styles.link
					}>
					{item.name}
				</NavLink>
			))}
		</aside>
	);
};
export default Aside;
