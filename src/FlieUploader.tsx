import * as React from 'react';
import { DataTypes } from './dataTypes';

interface Props {
    onReceiveData: (arg: DataTypes.Data[]) => void;
}

export class FileUploader extends React.Component<Props> {

    private reader: FileReader;

    constructor(props: Props) {
        super(props)
        this.reader = new FileReader()
        this.reader.onloadend = this.handleFileRead.bind(this);
    }

    handleFileRead(ev: ProgressEvent) {
        const content = this.reader.result as string;
        const data = content.split('\n').map((d) => JSON.parse(d) as DataTypes.Data);
        this.props.onReceiveData(data);
        console.log(data);
    }

    receiveFile(e: React.FormEvent<HTMLInputElement>) {
        let file = e.currentTarget.files && e.currentTarget.files[0];
        this.reader.readAsText(file as Blob);
    }

    render() {
        return (
            <input type="file" onChange={this.receiveFile.bind(this)} />
        );
    }
}