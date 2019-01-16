export module DataTypes {

    interface File {
        data: Data[];
        name: string;
        id: number;
    }

    interface Data {
        level: string;
        ts: number;
        caller: string;
        msg: string;
        question?: Question
        count?: number;
    }

    interface Question {
        qid: string;
        index: number;
        trainingPhrase: string;
        matched: boolean;
        intent: string;
        retry: number;
    }
}