import Box from '../../lib/components/box/box';
import Counter from '../../lib/components/counter/counter';
import Text from '../../lib/components/text/text';

const CounterPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Counter
			</Text>
			<Box type='column'>
				<Counter
					type='oval'
					size={16}
					variant='primary'
					number={1000}
				/>
				<Counter
					type='oval'
					size={16}
					variant='secondary'
					number={1000}
				/>
				<Counter
					type='oval'
					size={20}
					variant='primary'
					number={1000}
				/>
				<Counter
					type='oval'
					size={20}
					variant='secondary'
					number={1000}
				/>
				<Counter
					type='oval'
					size={24}
					variant='primary'
					number={1000}
				/>
				<Counter
					type='oval'
					size={24}
					variant='secondary'
					number={1000}
				/>
			</Box>
			<Box type='column'>
				<Counter
					type='round'
					size={16}
					variant='primary'
					number={1000}
				/>
				<Counter
					type='round'
					size={16}
					variant='secondary'
					number={1000}
				/>
				<Counter
					type='round'
					size={20}
					variant='primary'
					number={1000}
				/>
				<Counter
					type='round'
					size={20}
					variant='secondary'
					number={1000}
				/>
				<Counter
					type='round'
					size={24}
					variant='primary'
					number={1000}
				/>
				<Counter
					type='round'
					size={24}
					variant='secondary'
					number={1000}
				/>
			</Box>
		</Box>
	);
};
export default CounterPage;
