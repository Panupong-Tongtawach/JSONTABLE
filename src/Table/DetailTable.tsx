import * as React from 'react';
import styled from 'styled-components';
import { DetailData } from '../Type/DataTypes';

const DetailTableWrapper = styled.div`
  width: 100%;
  table {
    width: 100%;
    .key {
      font-style: italic;
    }
  }
`;

interface Props {
  data: DetailData[];
}

export class DetailTable extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <DetailTableWrapper>
        <table>
          <tbody>{this.getRows(this.props.data)}</tbody>
        </table>
      </DetailTableWrapper>
    );
  }

  private getRows = (data: DetailData[]) => {
    return data.map(d => {
      switch (typeof d[1]) {
        case 'object':
          if (d[1] === null) {
            return this.renderRows(d[0], 'NULL');
          }
          return this.renderRows(d[0], JSON.stringify(d[1]));
        case 'number':
          return this.renderRows(d[0], d[1].toLocaleString());
        case 'string':
          return this.renderRows(d[0], d[1]);
        default:
          if (d[1] === undefined) {
            return;
          }
          return this.renderRows(d[0], d[1]);
      }
    });
  };

  private renderRows = (key: string, value: any) => {
    return (
      <tr key={key}>
        <td className="key">{key}</td>
        <td>{value}</td>
      </tr>
    );
  };
}
