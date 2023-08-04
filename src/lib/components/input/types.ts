export interface inputTypes {
	type: 'text' | 'password';
	size: 32 | 44 | 52 | 72;
	value: string;
	className?: string;
	id?: string;
	name?: string;
	required?: boolean;
	autoFocus?: boolean;
	placeholder?: string;
	disabled?: boolean;
	maxLength?: number;
	minLength?: number;
	onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
