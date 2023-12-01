import { useState } from 'react';
import Box from '../../lib/components/box/box';
import Text from '../../lib/components/text/text';
import Rating from '../../lib/components/rating';
import React from 'react';

const RatingPage = () => {
	const [state, setState] = useState(0);
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Rating
			</Text>
			<Box type='column'>
				<Rating
					numberOfStars={10}
					size={44}
					rating={state}
					onChange={(value) => setState(value)}
                    title={true}
                    number_of_ratings={5555}
                    result={6.3}
				/>
			</Box>
		</Box>
	);
};
export default RatingPage;
