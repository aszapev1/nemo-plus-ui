import Box from '../../lib/components/box/box';
import Icon from '../../lib/components/icon/icon';
import Text from '../../lib/components/text/text';

const IconsPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Иконки для интерфейса
			</Text>
			<Box type='column'>
				<Text tag='h2' weight='medium' size={36} lineHeight={40}>
					Arrows
				</Text>
				<Box>
					<Icon
						width={32}
						height={32}
						variant='outline'
						name='ChevronDown'
					/>
					<Icon
						width={32}
						height={32}
						variant='outline'
						name='ChevronUp'
					/>
					<Icon
						width={32}
						height={32}
						variant='outline'
						name='ChevronLeft'
					/>
					<Icon
						width={32}
						height={32}
						variant='outline'
						name='ChevronRight'
					/>
					<Icon
						width={32}
						height={32}
						variant='outline'
						name='Close'
					/>
				</Box>
			</Box>
		</Box>
	);
};
export default IconsPage;
