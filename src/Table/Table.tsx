import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from "styled-components";

interface Props {
    data: DataTypes.File[];
    displayColumn: string[];
}


const MainTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    thead {
        z-index: 2;
        text-transform: uppercase;
        color: #00ad5f;
        font-size: 15px;
        font-weight: bold;
        
        th {
            background-color: #101010;
            min-width: 50px;
            position: sticky;
            padding: 20px 10px;
            top: 0;
        }
    }

    tbody {
        color: white;
        font-size: 15px;
        td {
            padding: 10px;
            vertical-align: top;
        }

        tr:nth-child(odd) {
            background-color: #252525;
        }
        tr:nth-child(even) {
            background-color: #202020;
        }
    }
    .filename {
        background-color: black;
        color: #909090;
        column-span: all;
        font-size: 17px;
        font-weight: 500;
        td {
            padding: 7px 15px;
            font-style: italic;
        }
    }
`;

export class Table extends React.PureComponent<Props> {

    private renderHeaderRow() {
        return (
            <thead>
                {this.props.displayColumn.length === 0 ?
                    <th children={"Please select display column"} /> :
                    this.props.displayColumn.map((col) => (<th children={col} />))
                }
            </thead>
        );
    }

    private renderFileNameRow(name: string) {
        return <tr className="filename"><td colSpan={100}>{name}</td></tr>;
    }

    private renderFileDataRow(data: any) {
        return (
            <tr>
                {this.props.displayColumn.map((key) => {
                    const col = data[key];
                    if (typeof (col) === 'object') {
                        switch (col) {
                            case null:
                                return <td>null</td>
                            default:
                                return <td>{this.renderObjectTable(data[key])}</td>
                        }
                    };
                    return <td>{data[key]}</td>
                })}
            </tr>
        )
    }

    renderObjectTable(object: any): any {
        return (
            <MainTable>
                {Object.keys(object).map((key: any) => {
                    switch (typeof object[key]) {
                        case 'object':
                            return <td>{this.renderObjectTable(object[key])}</td>
                        default:
                            return (
                                <tr>
                                    <td>{key}</td>
                                    <td>{object[key]}</td>
                                </tr>
                            );
                    };
                })}
            </MainTable>
        )
    }

    private renderRows() {
        return this.props.data.map(file => {
            return (
                <>
                    {this.renderFileNameRow(file.name)}
                    <tbody>
                        {file.data.map((data) => this.renderFileDataRow(data))}
                    </tbody>
                </>
            );
        });
    }

    render() {
        return (
            <MainTable>
                {this.renderHeaderRow()}
                {this.renderRows()}
            </MainTable>
        );
    }
}
