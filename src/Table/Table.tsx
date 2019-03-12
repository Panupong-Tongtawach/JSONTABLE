import * as React from 'react';
import styled from 'styled-components';
import { isNullOrUndefined } from 'util';
import { DataTypes } from '../DataTypes';

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
  public render() {
    return (
      <MainTable>
        {this.renderHeaderRow()}
        {this.renderRows()}
      </MainTable>
    );
  }

  private renderHeaderRow() {
    return (
      <thead>
        <tr>
          {this.props.displayColumn.length === 0 ? (
            <th children={'Please select display column'} />
          ) : (
            this.props.displayColumn.map((col, k) => (
              <th children={col} key={k} />
            ))
          )}
        </tr>
      </thead>
    );
  }

  private renderFileNameRow(name: string) {
    return (
      <tr className="filename">
        <td colSpan={100}>{name}</td>
      </tr>
    );
  }

  private renderFileDataRow(data: any) {
    let isDataExists = false;

    const cols = this.props.displayColumn.map(key => {
      const col = data[key];
      if (typeof col === 'object') {
        isDataExists = true;
        switch (col) {
          case null:
            return 'null';
          default:
            return this.renderObjectTable(data[key]);
        }
      }
      isDataExists = isDataExists || !isNullOrUndefined(data[key]);
      return data[key];
    });

    return isDataExists ? (
      <tr>
        {cols.map((c, k) => (
          <td key={k}>{c}</td>
        ))}
      </tr>
    ) : null;
  }

  private renderObjectTable(object: any): any {
    return (
      <MainTable>
        {Object.keys(object).map((key: any) => {
          switch (typeof object[key]) {
            case 'object':
              return <td>{this.renderObjectTable(object[key])}</td>;
            default:
              return (
                <tr>
                  <td>{key}</td>
                  <td>{object[key]}</td>
                </tr>
              );
          }
        })}
      </MainTable>
    );
  }

  private renderRows() {
    return this.props.data.map((file, i) => {
      return (
        <React.Fragment key={i}>
          <tbody>{this.renderFileNameRow(file.name)}</tbody>
          <tbody>{file.data.map(data => this.renderFileDataRow(data))}</tbody>
        </React.Fragment>
      );
    });
  }
}
