import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from 'styled-components';

interface Props {
    files: DataTypes.File[];
    onFileRemove: (x: number) => void;
}

const FlieListContainer = styled.div`
display: grid;
grid-template-columns: 1fr min-content;
`;

export class FileList extends React.Component<Props> {

    private renderFileRow(file: DataTypes.File) {
        const onRemoveClick = () => this.props.onFileRemove(file.id);
        return (
            <>
                <div>{file.name}</div>
                <button onClick={onRemoveClick} children="✕" />
            </>
        );
    }

    render() {
        return (
            <FlieListContainer>
                {this.props.files.map(x => this.renderFileRow(x))}
            </FlieListContainer>
        );
    }
}