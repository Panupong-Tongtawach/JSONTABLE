import * as React from 'react';
import styled from "styled-components";
import { DataTypes } from "../dataTypes";
import { isNullOrUndefined } from 'util';
import { ExpandableRow } from './ExpandableRow';

interface Props {
    file?: DataTypes.File;
    displayColumn: string[];
}

const MainTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    color: white;
    font-size: 15px;

    thead {
        z-index: 2;
        text-transform: uppercase;
        color: #fa0000;
        font-size: 15px;
        font-weight: bold;
        
        th {
            background-color: black;
            min-width: 50px;
            position: sticky;
            padding: 20px 10px;
            top: 0;
        }
    }

    .body {
        &_file-name {
            background-color: #131313;
            color: #909090;
            font-size: 17px;
            font-weight: 500;
            font-style: italic;
            td {
                padding: 7px 15px;
            }
        }

        &_data {
            &-row:nth-child(odd) {
                background-color: #252525;
            }
            &-row:nth-child(even) {
                background-color: #202020;
            }
            &-detailrow {
                background-color: #303030;
            }
            td {
                padding: 10px;
                vertical-align: top;
            }
        }
    }
`;

export class Table extends React.PureComponent<Props> {

    private renderHeader() {
        return (
            <thead><tr>{
                this.props.displayColumn.length === 0 ?
                    <th children={"Please select display column"} /> :
                    this.props.displayColumn.map((col, i) => (<th key={i} children={col} />))
            }</tr></thead>
        );
    }

    private renderFileNameRow(name: string) {
        return <tr><td colSpan={1000}>{name}</td></tr>;
    }

    private renderFileDataRow(data: any, key: number) {
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
                <ExpandableRow cols={cols} detailData={detailData} key={key} />
            ) : null);
    }

    private renderRows() {
        return this.props.file ? (
            <>
                <tbody className="body_file-name">
                    {this.renderFileNameRow(this.props.file.name)}
                </tbody>
                <tbody className="body_data">
                    {this.props.file.data.map((d, i) => this.renderFileDataRow(d, i))}
                </tbody>
            </>
        ) : null;
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
