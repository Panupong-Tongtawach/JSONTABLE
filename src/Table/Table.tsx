import * as React from 'react';
import { DataTypes } from "../dataTypes";
import styled from "styled-components";

interface Props {
    data: DataTypes.File[];
    displayColumn: string[];
}


const MainTable = styled.div`
    width: 100%;
    display: table;
    text-align: left;
    .head {
        display: table-row;
        z-index: 2;
        text-transform: uppercase;
        background-color: #101010;
        color: #00ad5f;
        font-size: 15px;
        font-weight: bold;
        .col {
            position: sticky;
            position: -webkit-sticky;
            padding: 20px 10px;
            top: 0;
        }
    }

    .col{
        display: table-cell;
    }

    .body {
        display: table-row-group;
        color: #b1b1b1;
        font-size: 15px;
        .col {
            padding: 10px;
            vertical-align: top;
        }
        .row:nth-child(odd) {
            background-color: #252525;
        }
        .row:nth-child(even) {
            background-color: #202020;
        }
        .filename {
            background-color: #151515;
            color: #6ae4a7;
            padding: 10px;
            column-span: all;
            font-size: 15px;
            font-weight: 500;
        }
    }

    .row{
        display: table-row;
    }
`;

export class Table extends React.PureComponent<Props> {

    private renderHeaderRow() {
        return (
            <div className="head">
                {this.props.displayColumn.length === 0 ?
                    <div className="col" children={"Please select display column"} /> :
                    this.props.displayColumn.map((col) => (<div className="col" children={col} />))
                }
            </div>
        );
    }

    private renderFileNameRow(name: string) {
        return <div className="filename">{name}</div>;
    }

    private renderFileDataRow(data: any) {
        return (
            <div className="row">
                {this.props.displayColumn.map((key) => {
                    const col = data[key];
                    if (typeof (col) === 'object') {
                        switch (col) {
                            case null:
                                return <div className="col">null</div>
                            default:
                                return <div className="col">{this.renderObjectTable(data[key])}</div>
                        }
                    };
                    return <div className="col">{data[key]}</div>
                })}
            </div>
        )
    }

    renderObjectTable(object: any): any {
        return (
            <MainTable>
                {Object.keys(object).map((key: any) => {
                    switch (typeof object[key]) {
                        case 'object':
                            return <div className="col">{this.renderObjectTable(object[key])}</div>
                        default:
                            return (
                                <div className="row">
                                    <div className="col">{key}</div>
                                    <div className="col">{object[key]}</div>
                                </div>
                            );
                    };
                })}
            </MainTable>
        )
    }

    private renderRows() {
        return this.props.data.map(file => {
            return (
                <div className="body">
                    {this.renderFileNameRow(file.name)}
                    {file.data.map((data) => this.renderFileDataRow(data))}
                </div>
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
