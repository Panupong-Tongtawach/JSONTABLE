import { PureComponent, ReactElement } from 'react';

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
    this.state = { isExpand: false };
  }

  public render() {
    return (
      <>
        <tr onClick={this.onRowClick}>
          {this.props.cols.map((col, k) => (
            <td key={k}>{col}</td>
          ))}
        </tr>
        <td>{this.props.expandElement}</td>
      </>
    );
  }

  private onRowClick() {
    this.setState({ isExpand: !this.state.isExpand });
  }
}
