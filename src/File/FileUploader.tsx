import * as React from 'react';
import { DataTypes } from '../dataTypes';
import styled from 'styled-components';

interface Props {
    onAddFile: (x: DataTypes.File) => void;
}

const FileUploaderWrapper = styled.div`
    width: 100%;
    height: 100%;

    input[type="file"] {
        display: none;
    }

    .border{
        font-weight: 500;
        font-size: 20px;
        border: solid 1px hsl(0,0%,80%);
        border-radius: 4px;
        background-color: white;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        cursor: pointer;
    }

    .border:hover{
        background-color: hsl(0,0%,80%);
    }
`;


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
                const parseD = JSON.parse(d);
                return parseD;
            } catch {
                return {};
            }
        }).filter((d) => Object.keys(d).length > 0);
        this.props.onAddFile({ name: this.currentFileName, data: parseData, id: 0 });
    }

    private onReceiveFile(e: React.FormEvent<HTMLInputElement>) {
        let file = e.currentTarget.files && e.currentTarget.files[0];
        if (file) {
            const fileExtensionRegex = /^.*\.(json|jsonl)$/i;
            if (file && fileExtensionRegex.test(file.name)) {
                this.reader.readAsText(file as Blob);
                this.currentFileName = file.name;
            } else {
                alert('File type not support, Please use JSON.');
            }
        }
    }

    render() {
        return (
            <FileUploaderWrapper>
                <label htmlFor="fileSelector" >
                    <div className="border">
                        Add
                    </div>
                </label>
                <input id="fileSelector" type="file" onChange={this.onReceiveFile.bind(this)} />
            </FileUploaderWrapper>
        )
    }
}