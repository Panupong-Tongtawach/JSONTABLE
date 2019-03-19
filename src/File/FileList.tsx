import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  files: File[];
  onFileRemove: (x: number) => void;
  onFileSelect: (x: number) => void;
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
        cursor: pointer;
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

export class FileList extends React.Component<IProps> {
  public render() {
    return (
      <FlieListContainer>
        {this.props.files.length > 0 ? (
          this.renderFileList(this.props.files)
        ) : (
          <div className="nodata">No File</div>
        )}
      </FlieListContainer>
    );
  }

  private renderFileList = (files: File[]) => {
    return (
      <table className="table">
        <tbody>{files.map((x, i) => this.renderFileRow(x, i))}</tbody>
      </table>
    );
  };

  private renderFileRow = (file: File, index: number) => {
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
  };
}
