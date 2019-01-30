import * as React from 'react';
import styled from 'styled-components';

interface Props {
    displayItem: JSX.Element;
}

interface States {
    isExpand: boolean;
}


const ExpandableRowWrapper = styled.tr<States>`
    display: ${(props) => props.isExpand ? "table-row" : "none"};
`;

export class ExpandableRow extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isExpand: false
        };
    }

    handleClick() {
        this.setState({ isExpand: !this.state.isExpand })
    }

    render() {
        return (
            <>
                {React.cloneElement(this.props.displayItem, { onClick: this.handleClick.bind(this) })}
                <ExpandableRowWrapper isExpand={this.state.isExpand} children={this.props.children} />
            </>
        );
    }

}