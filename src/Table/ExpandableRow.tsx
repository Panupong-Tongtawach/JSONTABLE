import * as React from 'react';
import styled from 'styled-components';

interface States {
    isExpand: boolean;
}

const ExpandableRowWrapper = styled.tr`
`;

export class ExpandableRow extends React.Component<{}, States> {

    constructor() {
        super({});
        this.state = {
            isExpand: false
        };
    }

    render() {
        return this.props.children;
    }

}