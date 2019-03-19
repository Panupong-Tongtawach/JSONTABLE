import * as React from 'react';
import styled from 'styled-components';

interface Props {
  onFileAdd: (x: File) => void;
}

const FileUploaderWrapper = styled.div`
  width: 100%;
  height: 100%;

  input[type='file'] {
    display: none;
  }

  .border {
    font-weight: 700;
    font-size: 20px;
    border-radius: 4px;
    background-color: #333;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
  }

  .border:hover {
    background-color: #4d4d4d;
  }
`;

export class FileUploader extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <FileUploaderWrapper>
        <label htmlFor="fileSelector">
          <div className="border">Add</div>
        </label>
        <input id="fileSelector" type="file" onChange={this.onReceiveFile} />
      </FileUploaderWrapper>
    );
  }

  private onReceiveFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0];
    if (file) {
      this.props.onFileAdd(file);
    }
  };
}
