import './loader.css';

export interface LoaderProps {
	className?: string;
	size: 16 | 24 | 40;
	variant: 'default' | 'white' | 'black';
}

const Loader = (props: LoaderProps) => {
	const { className, size, variant } = props;
	const css = ['nemo-loader'];
	if (className) {
		css.push(className);
	}
	if (size) {
		css.push(`nemo-loader--${size}`);
	}

	if (variant) {
		css.push(`nemo-loader--${variant}`);
	}
	return (
		<div className={css.join(' ')}>
			<span className='nemo-loader_trait' />
			<span className='nemo-loader_trait' />
			<span className='nemo-loader_trait' />
		</div>
	);
};
export default Loader;
