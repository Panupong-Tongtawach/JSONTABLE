import { Option } from "react-select/lib/filters";

export interface IFile {
	data: object[];
	name: string;
}

export interface IQuestion {
	qid: string;
	index: number;
	trainingPhrase: string;
	matched: boolean;
	intent: string;
	retry: number;
}

export interface ISelectOption {
	value: string;
	label: string;
}
