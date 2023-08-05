import React from 'react';
import Box from '../../lib/components/box/box';
import Text from '../../lib/components/text/text';

const TypographyPage = () => {
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Типография
			</Text>
			<Box type='column'>
				<Box type='column'>
					<Text
						tag='span'
						weight='bold'
						size={72}
						lineHeight={72}
						className='uppercase'>
						Promotion
					</Text>
					<Text
						tag='span'
						weight='medium'
						size={72}
						lineHeight={72}
						className='uppercase'>
						Promotion
					</Text>
					<Text
						tag='span'
						weight='regular'
						size={72}
						lineHeight={72}
						className='uppercase'>
						Promotion
					</Text>
					<Text
						tag='span'
						weight='bold'
						size={44}
						lineHeight={44}
						className='uppercase'>
						Promotion
					</Text>
					<Text
						tag='span'
						weight='medium'
						size={44}
						lineHeight={44}
						className='uppercase'>
						Promotion
					</Text>
					<Text
						tag='span'
						weight='regular'
						size={44}
						lineHeight={44}
						className='uppercase'>
						Promotion
					</Text>
				</Box>
				<Box type='column'>
					<Text tag='span' weight='medium' size={36} lineHeight={40}>
						Header
					</Text>
					<Text tag='span' weight='medium' size={32} lineHeight={36}>
						Header 2
					</Text>
					<Text tag='span' weight='medium' size={24} lineHeight={28}>
						Header 3
					</Text>
					<Text tag='span' weight='medium' size={20} lineHeight={24}>
						Header 4
					</Text>
					<Text tag='span' weight='medium' size={17} lineHeight={24}>
						Header 5
					</Text>
					<Text tag='span' weight='medium' size={14} lineHeight={20}>
						Header 6
					</Text>
				</Box>
				<Box type='column'>
					<Text tag='span' weight='regular' size={24} lineHeight={32}>
						Paragraph
					</Text>
					<Text tag='span' weight='regular' size={20} lineHeight={28}>
						Paragraph
					</Text>
					<Text tag='span' weight='regular' size={17} lineHeight={24}>
						Paragraph
					</Text>
					<Text tag='span' weight='regular' size={14} lineHeight={20}>
						Paragraph
					</Text>
				</Box>
				<Box type='column'>
					<Text tag='span' weight='regular' size={12} lineHeight={16}>
						Caption
					</Text>
					<Text tag='span' weight='regular' size={10} lineHeight={12}>
						Caption
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
export default TypographyPage;
