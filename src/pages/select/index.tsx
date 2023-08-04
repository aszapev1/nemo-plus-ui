import { useRef, useState } from 'react';
import Box from '../../lib/components/box/box';
import Select from '../../lib/components/select/select';
import Text from '../../lib/components/text/text';
import Popup from '../../lib/components/popup/popup';

const SelectPage = () => {
	const ref = useRef(null);
	const [isShow, setIsShow] = useState(false);
	const [value, setValue] = useState<{ id: string; title: string }[]>([]);

	const handleClick = (value: { id: string; title: string }) => {
		setValue((prevState) => [...prevState, value]);
	};

	const handlerOnVisibleChange = (value: boolean) => {
		if (!value) {
			setIsShow(value);
		}
	};
	const handleClickChip = (id: number | string) => {
		setValue((prevState) => {
			let filtered = prevState.filter((item) => item.id !== id);
            return filtered;
		});
	};

	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Select
			</Text>
			<Popup
				visible={isShow}
				onVisibleChange={handlerOnVisibleChange}
				onOpen='click'
				closeOnTriggerHidden={false}
				position='bottom-start'
				content={
					<>
						<Popup.Item
							tabIndex={0}
							onClick={() =>
								handleClick({
									id: 'Вариант 1',
									title: 'Вариант 1',
								})
							}>
							<Text
								tag='span'
								weight='regular'
								size={17}
								lineHeight={24}>
								Вариант 1
							</Text>
						</Popup.Item>
						<Popup.Item
							tabIndex={0}
							onClick={() =>
								handleClick({
									id: 'Вариант 2',
									title: 'Вариант 2',
								})
							}>
							<Text
								tag='span'
								weight='regular'
								size={17}
								lineHeight={24}>
								Вариант 2
							</Text>
						</Popup.Item>
						<Popup.Item
							tabIndex={0}
							onClick={() =>
								handleClick({
									id: 'Вариант 3',
									title: 'Вариант 3',
								})
							}>
							<Text
								tag='span'
								weight='regular'
								size={17}
								lineHeight={24}>
								Вариант 3
							</Text>
						</Popup.Item>
					</>
				}>
				<Select
					ref={ref}
					size={44}
					placeholder='Выберите значение'
					value={value}
					isOpen={isShow}
					onClick={() => setIsShow(!isShow)}
					onClickChip={handleClickChip}
				/>
			</Popup>
		</Box>
	);
};

export default SelectPage;
