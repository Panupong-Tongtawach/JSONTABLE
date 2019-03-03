import * as React from "react";

export interface InjectedExpandableProps<T extends HTMLElement> {
	onClick: React.MouseEventHandler<T>;
	isExpand: boolean;
}

interface IState {
	isExpand: boolean;
}

export function makeExpandable<P>(Component: React.ComponentType<P & InjectedExpandableProps<HTMLElement>>) {
	return class extends React.PureComponent<P, IState> {
		public state: IState = {
			isExpand: false,
		};

		public onExpand = () => {
			this.setState((prevState) => ({ isExpand: !prevState.isExpand }));
		}

		public render() {
			const { onClick, ...props } = this.props as any;
			const onPerformClick = (e: React.MouseEvent<HTMLElement>) => { if (onClick) { onClick(e); } this.onExpand(); };
			return (
				<Component
					{...props}
					onClick={onPerformClick}
					isExpand={this.state.isExpand}
				/>
			);
		}
	};
}
