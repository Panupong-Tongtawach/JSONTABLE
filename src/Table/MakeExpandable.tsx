import * as React from 'react';

export interface InjectedExpandableProps {
    onClick(): void;
    isExpand: boolean;
}

interface State {
    isExpand: boolean;
}

export function makeExpandable<P>(Component: React.ComponentType<P & InjectedExpandableProps>) {
    return class extends React.PureComponent<P, State> {
        public state: State = {
            isExpand: false,
        };

        public onClick = () => {
            this.setState(prevState => ({ isExpand: !prevState.isExpand }));
        };

        public render() {
            const { onClick, ...props } = this.props as any;
            return (
                <Component
                    {...props}
                    onClick={() => { onClick && onClick(); this.onClick(); }}
                    isExpand={this.state.isExpand}
                />
            );
        }
    };
}