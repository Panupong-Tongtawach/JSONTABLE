import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from "styled-components";
import { isNullOrUndefined } from 'util';
import { DetailTable } from './DetailTable';
import { ExpandableRow } from './ExpandableRow';

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
            &.filename {
                background-color: black;
            }
        }
        tr:nth-child(even) {
            background-color: #202020;
        }
    }
    .filename {
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

    private renderHeader() {
        return (
            <thead>
                <tr>
                    {
                        this.props.displayColumn.length === 0 ?
                            <th children={"Please select display column"} /> :
                            this.props.displayColumn.map((col, i) => (<th key={i} children={col} />))
                    }
                </tr>
            </thead>
        );
    }

    private renderFileNameRow(name: string) {
        return <tr className="filename"><td colSpan={1000}>{name}</td></tr>;
    }

    private renderFileDataRow(data: any) {
        let isDataExists = false;
        const detailData: [string, any][] = [];
        const cols = this.props.displayColumn.map((key) => {
            const colData = data[key];
            detailData.push([key, colData]);

            if (typeof (colData) === 'object') {
                isDataExists = true;
                switch (colData) {
                    case null:
                        return "null";
                    default:
                        return JSON.stringify(colData);
                }
            };
            isDataExists = isDataExists || !isNullOrUndefined(colData);
            return colData;
        });

        return (
            isDataExists ? (
                <>
                    <tr>
                        {cols.map(c => <td>{c}</td>)}
                    </tr>
                    <ExpandableRow>

                        <tr>
                            <td colSpan={1000}><DetailTable data={detailData} /></td>
                        </tr>
                    </ExpandableRow>
                </>
            ) : null);
    }

    private renderRows() {
        return this.props.data.map((file, i) => {
            return (
                <React.Fragment key={i}>
                    <tbody>
                        {this.renderFileNameRow(file.name)}
                    </tbody>
                    <tbody>
                        {file.data.map(d => this.renderFileDataRow(d))}
                    </tbody>
                </React.Fragment>
            );
        });
    }

    render() {
        return (
            <MainTable>
                {this.renderHeader()}
                {this.renderRows()}
            </MainTable>
        );
    }
}
