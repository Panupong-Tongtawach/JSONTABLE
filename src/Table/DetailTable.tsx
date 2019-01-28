import * as React from 'react';
import styled from 'styled-components';

const DetailTableWrapper = styled.div`
    width: 100%;
    table{
        width: 100%;
    }
`;

type Data = [string, any];

interface Props {
    data: Data[];
}

export class DetailTable extends React.PureComponent<Props> {

    constructor(props: Props) {
        super(props);
    }

    getRows(data: Data[]) {
        return data.map(d => {
            switch (typeof (d[1])) {
                case 'object':
                    if (d[1] === null) return this.renderRows(d[0], 'NULL');
                    return this.renderRows(d[0], JSON.stringify(d[1]));
                case 'number':
                    return this.renderRows(d[0], (d[1] as number).toLocaleString());
                case 'string':
                    return this.renderRows(d[0], d[1]);
                default:
                    if (d[1] === undefined) return this.renderRows(d[0], 'UNDEFINED');
                    return this.renderRows(d[0], "default");
            }
        });
    }

    renderRows(key: string, value: any) {
        return (
            <tr>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        );
    }

    render() {
        return (
            <DetailTableWrapper>
                <table>
                    <tbody>
                        {this.getRows(this.props.data)}
                    </tbody>
                </table>
            </DetailTableWrapper>
        );
    }
}