import Box from '../../lib/components/box/box';
import Text from '../../lib/components/text/text';
import Pagination from '../../lib/components/pagination/pagination';
import { useState } from 'react';
import React from 'react';

const PaginationPage = () => {
	const [page, setPage] = useState(1);
	return (
		<Box type='column'>
			<Text tag='h1' weight='medium' size={36} lineHeight={40}>
				Pagination
			</Text>
			<Box>
				<Pagination
					size={44}
					total={2000}
					activePage={page}
					controls={true}
					onChange={(page) => setPage(page)}
				/>
			</Box>
		</Box>
	);
};
export default PaginationPage;
