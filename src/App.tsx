import React, { Component, ReactElement } from 'react';
import './App.css';
import { DataTypes } from './dataTypes';
import { FileUploader } from './File/FileUploader';
import styled from 'styled-components';
import { Table } from './Table/Table';
import { FileList } from './File/FileList';

const TableContainer = styled.div`
width: 100%;
`;

const Container = styled.div`
width: 100%;
`;

const Header = styled.header`
width: 100%;
`;

interface Props { }

interface States {
    currentID: number;
    files: DataTypes.File[];
}

class App extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            currentID: 0,
            files: this.defaultFiles,
        };
    }

    colHeader = ['level', 'ts', 'caller', 'msg', 'question', 'count']

    defaultFiles: DataTypes.File[] = [{
        name: 'default',
        id: 0,
        data: [
            { "level": "info", "ts": 1547306559.829222, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:62", "msg": "Fetch questions success", "count": 165 },
            { "level": "info", "ts": 1547306565.250088, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d504d251974fc4534805", "index": 2, "trainingPhrase": "กองถ่ายขอเข้าถ่ายทำโมษณา กรรมการอนุมัติได้หรือไม่", "matched": false, "intent": "5c24d507d251974fc4534806", "retry": 0 } },
        ],
    }];

    onFileReceive(file: DataTypes.File) {
        this.setState({ files: this.state.files.concat({ ...file, id: this.state.currentID + 1 }), currentID: this.state.currentID + 1 });
    }

    onRemoveFile(id: number) {
        this.setState({ files: this.state.files.filter(x => id !== x.id) })
    }

    onClearAll(e: React.FormEvent<HTMLButtonElement>) {
        this.setState({ files: [], currentID: -1 });
    }

    render() {
        return (
            <Container>
                <Header>
                    <FileUploader onAddFile={this.onFileReceive.bind(this)} />
                    <FileList files={this.state.files} onRemoveFile={this.onRemoveFile.bind(this)} />
                    <button onClick={this.onClearAll.bind(this)} children="Clear" />
                </Header>
                <TableContainer>
                    <Table data={this.state.files} displayColumn={this.colHeader} />
                </TableContainer>
            </Container>
        );
    }
}
export default App;
