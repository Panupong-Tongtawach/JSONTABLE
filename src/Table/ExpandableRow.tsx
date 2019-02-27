import * as React from 'react';
import { DetailTable } from './DetailTable';
import { InjectedExpandableProps, makeExpandable } from './MakeExpandable';

export type Props = {
    cols: object[];
    detailData: Array<[string, any]>;
    onClick?: React.MouseEventHandler<HTMLTableRowElement>;
} & InjectedExpandableProps<HTMLElement>

const ExpandableRowClass = (props: Props) => (
    <>
        <tr className="body_data-row" onClick={props.onClick}>{props.cols.map((c, k) => <td key={k}>{c}</td>)}</tr>
        {props.isExpand ? (
            <tr className="body_data-detailrow">
                <td colSpan={1000}><DetailTable data={props.detailData} /></td>
            </tr>) : null}
    </>
);

export const ExpandableRow = makeExpandable(ExpandableRowClass)