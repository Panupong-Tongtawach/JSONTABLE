import * as React from 'react';
import { DataTypes } from './dataTypes';

interface Props {
    onReceiveData: (arg: DataTypes.Data[]) => void;
}

interface States {
    currentID: number;
    files: DataTypes.File[];
}

export class FileUploader extends React.PureComponent<Props, States> {

    private reader: FileReader;

    constructor(props: Props) {
        super(props)
        this.state = {
            currentID: 0,
            files: [{ name: 'default', id: 0 }],
        };
        this.reader = new FileReader();
        this.reader.onloadend = this.handleFileRead.bind(this);
    }

    handleFileRead(ev: ProgressEvent) {
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
        this.props.onReceiveData(parseData);
    }

    onReceiveFile(e: React.FormEvent<HTMLInputElement>) {
        let file = e.currentTarget.files && e.currentTarget.files[0];
        console.log(file);
        const fileExtensionRegex = /^.*\.(json|jsonl)$/i;
        if (file) {
            if (file && fileExtensionRegex.test(file.name)) {
                this.reader.readAsText(file as Blob);
                this.setState({ files: this.state.files.concat({ name: file.name, id: this.state.currentID + 1 }), currentID: this.state.currentID + 1 });
            } else {
                alert('File not support!!');
            }
        }
    }

    onRemoveFile(id: number) {
        const index = this.state.files.findIndex(x => x.id === id);
        const newFiles = [...this.state.files];
        newFiles.splice(index, 1);
        console.log('file', newFiles)
        this.setState({ files: newFiles });
    }

    renderFileList() {
        return (
            <table>
                {
                    this.state.files.map(f => {
                        const onRemoveClick = () => {
                            this.onRemoveFile(f.id);
                        };
                        return <tr><td>{f.name}</td><td><button onClick={onRemoveClick.bind(this)} children="X" /></td></tr>
                    })
                }
            </table>
        )

    }

    render() {
        return (
            <>
                <input type="file" onChange={this.onReceiveFile.bind(this)} />
                {this.renderFileList()}
            </>
        );
    }
}