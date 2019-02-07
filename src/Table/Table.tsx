import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from "styled-components";
import { isNullOrUndefined } from 'util';
import { ExpandableRow } from './ExpandableRow';

interface Props {
    data: DataTypes.File[];
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

    .body {
        &_file-name {
            background-color: black;
            color: #909090;
            font-size: 17px;
            font-weight: 500;
            td {
                padding: 7px 15px;
                font-style: italic;
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
                <ExpandableRow cols={cols} detailData={detailData} />
            ) : null);
    }

    private renderRows() {
        return this.props.data.map((file, i) => {
            return (
                <React.Fragment key={i}>
                    <tbody className="body_file-name">
                        {this.renderFileNameRow(file.name)}
                    </tbody>
                    <tbody className="body_data">
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
