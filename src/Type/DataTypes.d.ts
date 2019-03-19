import { Option } from 'react-select/lib/filters';

export interface FileType {
  name: string;
  data: object[];
}

export type DetailData = [string, any];

export interface Question {
  qid: string;
  index: number;
  trainingPhrase: string;
  matched: boolean;
  intent: string;
  retry: number;
}

export interface SelectOption {
  value: string;
  label: string;
}
