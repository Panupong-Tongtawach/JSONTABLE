export module DataTypes {

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

    interface File {
        name: string;
        id: number;
    }
}