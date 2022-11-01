declare module '*.jpg';
declare module '*.svg' {
	import { ReactElement } from 'react';
	import ReactComponent from '*.svg';
	export default { ReactComponent };
}
