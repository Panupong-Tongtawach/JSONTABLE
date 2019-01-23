import { ReactElement, PureComponent } from 'react'

interface Props {
    cols: string[];
    expandElement: ReactElement<HTMLDivElement>;
}

interface States {
    isExpand: boolean;
}

// TODO: In progress...

export class ExpandableRow extends PureComponent<Props, States> {

    constructor(props: Props, states: States) {
        super(props);
        this.state = { isExpand: false }
    }

    onRowClick() {
        this.setState({ isExpand: !this.state.isExpand })
    }

    render() {
        return (
            <>
                <tr onClick={this.onRowClick}>{this.props.cols.map(col => <td>{col}</td>)}</tr>
                <td>{this.props.expandElement}</td>
            </>
        );
    }
}