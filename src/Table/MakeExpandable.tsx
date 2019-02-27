import * as React from 'react';

export interface InjectedExpandableProps<T extends HTMLElement> {
    onClick: React.MouseEventHandler<T>;
    isExpand: boolean;
}

interface State {
    isExpand: boolean;
}

export function makeExpandable<P>(Component: React.ComponentType<P & InjectedExpandableProps<HTMLElement>>) {
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
                    onClick={(e: React.MouseEvent<HTMLElement>) => { onClick && onClick(e); this.onClick(); }}
                    isExpand={this.state.isExpand}
                />
            );
        }
    };
}