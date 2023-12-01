/**
 * Форматирование чисел. В качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - пробел
 */
export const formatNumbers = (value: number) => {
	return new Intl.NumberFormat('ru-RU').format(value);
};

/**
 * Склонение слов (от числа)
 */
export const declensionWords = (number: number, array: string[]) => {
	let cases = [2, 0, 1, 1, 1, 2];
	return array[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
};
