import * as React from 'react';
import { Subtract } from 'utility-types';
import { DetailTable } from './DetailTable';

export interface InjectedExpandableProps {
    onClick(): void;
    isExpand: boolean;
}

interface States {
    isExpand: boolean;
}

const makeExpandable = <P extends InjectedExpandableProps>(Component: React.ComponentType<P>) =>
    class MakeExpandable extends React.PureComponent<Subtract<P, InjectedExpandableProps>, States>{
        state: States = {
            isExpand: false,
        };

        onClick = () => {
            this.setState(prevState => ({ isExpand: !prevState.isExpand }));
        };

        render() {
            return (
                <Component {...this.props as P} onClick={this.onClick} isExpand={this.state.isExpand} />
            );
        };
    };

interface rowProps extends InjectedExpandableProps {
    cols: any[];
    detailData: [string, any][];
}

const ExpandableRowClass = (props: rowProps) => (
    <>
        <tr className="body_data-row" onClick={props.onClick}>{props.cols.map(c => <td>{c}</td>)}</tr>
        {props.isExpand ? <tr className="body_data-detailrow"><td colSpan={1000}><DetailTable data={props.detailData} /></td></tr> : null}
    </>
);


export const ExpandableRow = makeExpandable(ExpandableRowClass)