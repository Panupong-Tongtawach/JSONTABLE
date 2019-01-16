import * as React from 'react';
import { DataTypes } from '../dataTypes';

interface Props {
    onAddFile: (x: DataTypes.File) => void;
}

export class FileUploader extends React.PureComponent<Props> {

    private currentFileName = '';
    private reader: FileReader;

    constructor(props: Props) {
        super(props)
        this.reader = new FileReader();
        this.reader.onloadend = this.handleFileRead.bind(this);
    }

    private handleFileRead(ev: ProgressEvent) {
        const content = this.reader.result as string;
        const data = content.trim().split('\n').filter((d) => d.trim().length > 0);
        console.log('Input Data :', data);
        const parseData = data.map((d) => {
            try {
                const parseD = JSON.parse(d) as DataTypes.Data;
                return parseD;
            } catch {
                return {} as DataTypes.Data;
            }
        }).filter((d) => Object.keys(d).length > 0);
        this.props.onAddFile({ name: this.currentFileName, data: parseData, id: 0 });
    }

    private onReceiveFile(e: React.FormEvent<HTMLInputElement>) {
        let file = e.currentTarget.files && e.currentTarget.files[0];
        console.log(file);
        const fileExtensionRegex = /^.*\.(json|jsonl)$/i;
        if (file) {
            if (file && fileExtensionRegex.test(file.name)) {
                this.reader.readAsText(file as Blob);
                this.currentFileName = file.name;
            } else {
                alert('File not support!!');
            }
        }
    }

    render() {
        return <input type="file" onChange={this.onReceiveFile.bind(this)} />
    }
}