import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from "styled-components";

interface Props {
    data: DataTypes.File[];
    displayColumn: string[];
}

const TableHead = styled.thead`
    th {
        background-color: #101010;
        text-transform: uppercase;
        color: #00ad5f;
        font-size: 15px;
        font-weight: 500;
        padding: 20px 10px;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 999;
    }
`;

const DetailTable = styled.table`
width: 100%;
th {
    padding: 5px;
    text-transform: uppercase;
    font-weight: 500;
}
td {
    vertical-align: top;
}
`;

const FileNameRow = styled.tr`
th{
column-span: all;
}
`;

const TableBody = styled.tbody`
color: #b1b1b1;
font-size: 15px;
td {
    padding: 10px;
    vertical-align: top;
}
tr:nth-child(odd){
    background-color: #252525;
}
tr:nth-child(even){
    background-color: #202020;
}
`;

const MainTable = styled.table`
width: 100%;
border-collapse: collapse;
text-align: left;
`;

export class Table extends React.PureComponent<Props> {

    private renderHeaderRow() {
        return (
            <TableHead>
                {this.props.displayColumn.map((col) => (<th children={col} />))}
            </TableHead>
        );
    }

    private renderFileNameRow(name: string) {
        return <FileNameRow><th>{name}</th></FileNameRow>;
    }

    private renderFileDataRow(data: any) {
        return (
            <tr>
                {this.props.displayColumn.map((key) => {
                    switch (typeof (data[key])) {
                        case 'object':
                            return <tr>{this.renderObjectTable(data[key])}</tr>
                        default:
                            return <td>{data[key]}</td>
                    };
                })}
            </tr>
        )
    }

    renderObjectTable(object: any): any {
        return (
            <DetailTable>
                {Object.keys(object).map((key: any) => {
                    switch (typeof object[key]) {
                        case 'object':
                            return <tr>{this.renderObjectTable(object[key])}</tr>
                        default:
                            return (
                                <tr>
                                    <th>{key}</th>
                                    <td>{object[key]}</td>
                                </tr>
                            );
                    };
                })}
            </DetailTable>
        )
    }

    private renderRows() {
        return this.props.data.map(file => {
            return (
                <TableBody>
                    {this.renderFileNameRow(file.name)}
                    {file.data.map((data) => this.renderFileDataRow(data))}
                </TableBody>
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
