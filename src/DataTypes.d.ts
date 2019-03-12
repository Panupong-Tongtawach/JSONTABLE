import { Option } from 'react-select/lib/filters';

export namespace DataTypes {
  interface File {
    data: object[];
    name: string;
    id: number;
  }

  interface Question {
    qid: string;
    index: number;
    trainingPhrase: string;
    matched: boolean;
    intent: string;
    retry: number;
  }

  interface SelectOption {
    value: string;
    label: string;
  }
}
