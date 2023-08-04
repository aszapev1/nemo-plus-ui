import Box from '../../lib/components/box/box';
import Button from '../../lib/components/button/button';
import Loader from '../../lib/components/loader/loader';
import Text from '../../lib/components/text/text';

const ButtonsPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Кнопки
			</Text>
			<Box>
				<Button type='button' size={24} variant='primary'>
					<Text tag='span' weight='medium' size={10} lineHeight={12}>
						Купить авиабилет
					</Text>
				</Button>
				<Button type='button' size={32} variant='primary'>
					<Text tag='span' weight='medium' size={14} lineHeight={20}>
						Купить авиабилет
					</Text>
				</Button>
				<Button
					type='button'
					size={44}
					variant='primary'
					loading={false}
					loader={<Loader size={24} variant='white' />}>
					<Text tag='span' weight='medium' size={17} lineHeight={24}>
						Купить авиабилет
					</Text>
				</Button>
				<Button type='button' size={52} variant='primary' disabled>
					<Text tag='span' weight='medium' size={17} lineHeight={24}>
						Купить авиабилет
					</Text>
				</Button>
				<Button type='button' size={72} variant='primary'>
					<Text tag='span' weight='medium' size={24} lineHeight={32}>
						Купить авиабилет
					</Text>
				</Button>
			</Box>
		</Box>
	);
};
export default ButtonsPage;
