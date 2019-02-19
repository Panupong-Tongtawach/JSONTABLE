import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from 'styled-components';
import { Table } from '../Table/Table';

interface Props {
    files: File[];
    onFileRemove: (x: number) => void;
    onFileSelect: (x: number) => void
}

const FlieListContainer = styled.div`
    width: 100%;
    height: 100%;

    .table {
        width: 100%;
        padding: 0 10px;
        .row {
            td {
                display: flex;
                grid-template-columns: 1fr min-content;
                width: 100%;
            }
            div {
                flex: 1 100%;
            }
            button {
                flex: 1 auto;
            }
        }
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

    private renderFileRow(file: File, index: number) {
        const onRemove = () => this.props.onFileRemove(index);
        const onFileSelect = () => this.props.onFileSelect(index);
        return (
            <tr className="row" key={index}>
                <td>
                    <div onClick={onFileSelect}>{file.name}</div>
                    <button onClick={onRemove}>✕</button>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <FlieListContainer>
                {this.props.files.length > 0 ?
                    <table className="table">
                        <tbody>{this.props.files.map((x, i) => this.renderFileRow(x, i))}</tbody>
                    </table> :
                    <div className="nodata">No File</div>
                }
            </FlieListContainer>
        );
    }
}