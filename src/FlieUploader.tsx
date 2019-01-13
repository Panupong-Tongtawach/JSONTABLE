import * as React from 'react';

interface Props {

}

export class FileUploader extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <input type="file" />
        );
    }
}