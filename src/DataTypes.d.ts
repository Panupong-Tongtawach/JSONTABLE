import { Option } from "react-select/lib/filters";

export module DataTypes {

    interface File {
        data: object[];
        name: string;
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