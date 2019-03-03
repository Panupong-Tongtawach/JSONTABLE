import * as React from "react";
import styled from "styled-components";
import { IFile } from "../dataTypes";
import { FileList } from "./FileList";
import { FileUploader } from "./FileUploader";

interface IProps {
	onFileChange: (x?: IFile) => void;
}

interface IState {
	files: File[];
	selectedFileIndex: number;
}

const HeaderContainter = styled.header`
	z-index: 3;
	margin: 15px 30px;

	.title {
		font-size: 24px;
		padding: 10px 0;
		font-weight: 600;
	}

	.file {
		&-grid {
			display: grid;
			margin-top: 15px;
			grid-gap: 10px;
			grid-template: 100px auto/1fr 5fr;
			grid-template-areas:
				"l rt"
				"l rb";
		}
		&-upload {
			grid-area: l;
		}
		&-list {
			grid-area: rt;
			overflow-y: scroll;
		}
		&-clear {
			grid-area: rb;
		}
		&-title {
			font-size: 18px;
			text-transform: capitalize;
			font-weight: 500;
			white-space: nowrap;
		}
	}
`;

export class Header extends React.PureComponent<IProps, IState> {

	private reader: FileReader;
	private selectedFileName: string;

	public constructor(props: IProps) {
		super(props);
		this.state = {
			files: [],
			selectedFileIndex: -1,
		};
		this.reader = new FileReader();
		this.reader.onloadend = this.handleFileRead;
		this.selectedFileName = "";
	}

	public render() {
		return (
			<HeaderContainter>
				<div className="file-title">File Lists</div>
				<div className="file-grid">
					<div className="file-upload">
						<FileUploader onFileAdd={this.onFileAdd} />
					</div>
					<div className="file-list">
						<FileList files={this.state.files} onFileRemove={this.onFileRemove} onFileSelect={this.onFileSelect} />
					</div>
					<button className="file-clear" onClick={this.onFileClear} children="Clear" />
				</div>
			</HeaderContainter>
		);
	}
	private handleFileRead = () => {
		try {
			const content = this.reader.result as string;
			const data = content.trim().split("\n").filter((d) => d.trim().length > 0);
			const parseData: object[] = [];
			for (const d of data) {
				const parseD = JSON.parse(d);
				if (Object.keys(parseD).length > 0) { parseData.push(parseD); }
			}
			this.props.onFileChange({ name: this.selectedFileName, data: parseData });
		} catch {
			this.props.onFileChange(undefined);
			alert("File type not support, Please use JSON.");
			return;
		}
	}

	private onFileAdd = (file: File) => {
		const callback = (this.state.selectedFileIndex === -1 || this.state.files.length === 0) ?
			() => this.onFileSelect(0) : undefined;
		this.setState({ files: this.state.files.concat(file) }, callback);
	}

	private onFileSelect = (i: number) => {
		const file = this.state.files[i];
		if (file) {
			this.selectedFileName = file.name;
			this.reader.readAsText(file);
			this.setState({ selectedFileIndex: i });
		}
	}

	private onFileRemove = (i: number) => {
		if (this.state.selectedFileIndex === i) { this.props.onFileChange(undefined); }
		this.setState({ files: this.state.files.slice(i) });
	}

	private onFileClear = () => {
		this.props.onFileChange(undefined);
		this.setState({ files: [], selectedFileIndex: -1 });
	}
}
