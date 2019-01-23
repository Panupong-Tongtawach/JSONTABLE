import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from 'styled-components';

interface Props {
    files: DataTypes.File[];
    onFileRemove: (x: number) => void;
}

const FlieListContainer = styled.div`
    width: 100%;
    height: 100%;

    .table{
        display: grid;
        grid-template-columns: 1fr min-content;
    }

    .nodata {
        color: #aaaaaa;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export class FileList extends React.Component<Props> {

    private renderFileRow(file: DataTypes.File) {
        const onRemoveClick = () => this.props.onFileRemove(file.id);
        return (
            <React.Fragment key={file.id}>
                <div>{file.name}</div>
                <button onClick={onRemoveClick} children="✕" />
            </React.Fragment>
        );
    }

    render() {
        return (
            <FlieListContainer>
                {this.props.files.length > 0 ?
                    <div className="table">{this.props.files.map(x => this.renderFileRow(x))}</div> :
                    <div className="nodata">No File</div>
                }
            </FlieListContainer>
        );
    }
}