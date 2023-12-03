import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';
import './rating.css';
import { declensionWords, formatNumbers } from '../utils';

export interface RatingTypes {
	className?: string;
	numberOfStars: number;
	rating: number;
	size: number;
	title: boolean;
	onChange: (index: number) => void;
	result: number;
	number_of_ratings: number;
}

const Rating = (props: RatingTypes) => {
	const {
		className,
		numberOfStars,
		rating,
		size,
		title,
		onChange,
		result,
		number_of_ratings,
	} = props;
	const [hover, setHover] = useState(0);
	const style = ['nemo-rating'];
	if (className) {
		style.push(className);
	}
	return (
		<div className={style.join(' ')}>
			{[...Array(numberOfStars)].map((item, index) => {
				index += 1;
				return (
					<div className='nemo-rating_item' key={index}>
						<button
							type='button'
							key={index}
							className={
								index <= (hover || rating)
									? 'rating__star hover'
									: 'rating__star'
							}
							onClick={() => onChange(index)}
							onMouseEnter={() => setHover(index)}
							onMouseLeave={() => setHover(props.rating)}>
							<span
								className='rating__icon'
								style={{ width: size, height: size }}>
								<svg
									width={size}
									height={size}
									viewBox='0 0 44 44'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M21.0446 9.09181C21.335 8.15213 22.665 8.15214 22.9554 9.09181L25.5593 17.5182C25.6888 17.9372 26.0762 18.2229 26.5147 18.2229H35.0437C36.0002 18.2229 36.4109 19.4369 35.6508 20.0176L28.6658 25.3536C28.3327 25.608 28.1937 26.0431 28.3174 26.4435L30.9648 35.0108C31.2523 35.941 30.176 36.6918 29.4024 36.1007L22.6071 30.9096C22.2487 30.6358 21.7513 30.6358 21.3929 30.9096L14.5976 36.1007C13.824 36.6918 12.7477 35.941 13.0352 35.0108L15.6826 26.4435C15.8063 26.0431 15.6673 25.608 15.3342 25.3536L8.34924 20.0176C7.58912 19.4369 7.99976 18.2229 8.9563 18.2229H17.4853C17.9238 18.2229 18.3112 17.9372 18.4407 17.5182L21.0446 9.09181Z'
										fill='var(--brand)'
									/>
								</svg>
							</span>
						</button>
						{title && (
							<span className='nemo-rating_title'>{index}</span>
						)}
					</div>
				);
			})}
			{title && (
				<div className='nemo-rating_results'>
					<span className='nemo-rating_result'>{result}</span>
					<span className='nemo-rating_title'>{`${formatNumbers(
						number_of_ratings
					)} ${declensionWords(number_of_ratings, [
						'оценка',
						'оценки',
						'оценок',
					])}`}</span>
				</div>
			)}
		</div>
	);
};
Rating.propTypes = {
	numberOfStars: PropTypes.number.isRequired,
	className: PropTypes.string,
	rating: PropTypes.number.isRequired,
	onChange: PropTypes.func,
	size: number,
};
export default Rating;
