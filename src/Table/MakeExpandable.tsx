import * as React from 'react';
import { Subtract } from 'utility-types';

export interface InjectedExpandableProps {
    onClick(): void;
    isExpand: boolean;
}

interface State {
    isExpand: boolean;
}

export const makeExpandable = <P extends InjectedExpandableProps>(Component: React.ComponentType<P>) =>
    class MakeExpandable extends React.PureComponent<Subtract<P, InjectedExpandableProps>, State>{
        state: State = {
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