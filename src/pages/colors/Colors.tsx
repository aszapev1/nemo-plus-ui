import React from 'react';
import { colorsData } from '../../data/colorsData';
import Box from '../../lib/components/box/box';
import Text from '../../lib/components/text/text';
import styles from './colors.module.scss';

const Colors = () => {
	return (
		<Box type='column' className={styles.wrapper}>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Цвета и тени
			</Text>
			<>
				{colorsData.map((item) => (
					<Box
						type='column'
						key={item.category}
						className={styles.colors}>
						<Text
							className={styles.title}
							tag='h2'
							weight='medium'
							size={32}
							lineHeight={36}>
							{item.category}
						</Text>
						<>
							{item.colors.map((color) => (
								<Box
									key={item.category + ' ' + color.name}
									className={styles.row}>
									<Box>
										<Text
											tag='h3'
											weight='medium'
											size={24}
											lineHeight={28}>
											{color.name}
										</Text>
									</Box>
									<Box>
										<Text
											tag='span'
											weight='medium'
											size={20}
											lineHeight={28}>
											{color.var}
										</Text>
									</Box>
									<span
										className={styles.color}
										style={{
											backgroundColor: `var(${color.var})`,
										}}
									/>
								</Box>
							))}
						</>
					</Box>
				))}
			</>
		</Box>
	);
};
export default Colors;
