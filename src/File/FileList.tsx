import * as React from 'react';
import { DataTypes } from "../dataTypes";

interface Props {
    files: DataTypes.File[];
    onFileRemove: (x: number) => void;
}

export class FileList extends React.Component<Props> {

    private renderFileRow(file: DataTypes.File) {
        const onRemoveClick = () => this.props.onFileRemove(file.id);
        return (
            <tr>
                <td>{file.name}</td>
                <button onClick={onRemoveClick} children="X" />
            </tr>
        );
    }

    render() {
        return (
            <table>
                {this.props.files.map(x => this.renderFileRow(x))}
            </table>
        );
    }
}