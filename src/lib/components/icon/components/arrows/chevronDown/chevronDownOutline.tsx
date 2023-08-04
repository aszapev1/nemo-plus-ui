import { iconProps } from '../../../types';

const ChevronDownOutline = (props: iconProps) => {
	const { width, height } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M5.00005 8.00529C5.13132 8.00511 5.26133 8.03093 5.38257 8.08126C5.50381 8.13158 5.61388 8.20542 5.70644 8.2985L10.8197 13.4111C10.9744 13.5659 11.1581 13.6886 11.3603 13.7724C11.5624 13.8561 11.7791 13.8992 11.9979 13.8992C12.2167 13.8992 12.4334 13.8561 12.6356 13.7724C12.8377 13.6886 13.0214 13.5659 13.1761 13.4111L18.2814 8.30517C18.3736 8.20969 18.4839 8.13354 18.6059 8.08115C18.7278 8.02877 18.859 8.00119 18.9917 8.00004C19.1244 7.99888 19.2561 8.02418 19.3789 8.07444C19.5018 8.1247 19.6134 8.19892 19.7072 8.29278C19.8011 8.38663 19.8753 8.49824 19.9256 8.62109C19.9758 8.74393 20.0011 8.87556 20 9.00829C19.9988 9.14101 19.9712 9.27218 19.9188 9.39413C19.8665 9.51609 19.7903 9.62639 19.6948 9.7186L14.5895 14.8246C13.9018 15.5111 12.9697 15.8966 11.9979 15.8966C11.0261 15.8966 10.0941 15.5111 9.40629 14.8246L4.293 9.71194C4.15312 9.57214 4.05784 9.39399 4.01923 9.20002C3.98062 9.00606 4.00042 8.805 4.07612 8.62229C4.15181 8.43959 4.28 8.28344 4.44447 8.1736C4.60893 8.06377 4.80229 8.0052 5.00005 8.00529Z'
				fill='black'
			/>
		</svg>
	);
};
export default ChevronDownOutline;