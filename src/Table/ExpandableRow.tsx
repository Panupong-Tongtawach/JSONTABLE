import * as React from 'react';
import styled from 'styled-components';

const ExpandableRowWrapper = styled.div`
    color: white;
`;

interface Props {
    cols: any[];
}

interface States {
}

// TODO: In progress...

export class ExpandableRow extends React.PureComponent<Props, States> {

    constructor(props: Props, states: States) {
        super(props);
    }

    renderRow(c: any) {
        return (
            <tr>
                <td>{c}</td>
            </tr>
        )
    }

    render() {
        return (
            <ExpandableRowWrapper>
                <table>
                    {this.props.cols.map(r => this.renderRow(r))}
                </table>
            </ExpandableRowWrapper>
        );
    }
}