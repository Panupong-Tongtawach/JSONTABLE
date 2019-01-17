import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import { DataTypes } from './dataTypes';
import { FileUploader } from './File/FileUploader';
import styled from 'styled-components';
import { Table } from './Table/Table';
import { FileList } from './File/FileList';
import { ValueType } from 'react-select/lib/types';

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
    colsAvaliable: DataTypes.SelectOption[];
    colsSelected: DataTypes.SelectOption[];
}

class App extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            currentID: 0,
            files: [],
            colsAvaliable: [],
            colsSelected: [],
        };
    }

    componentDidMount() {
        this.onFileReceive(this.defaultFiles);

    }

    defaultCols = [{ value: 'level', label: 'level' }, { value: 'ts', label: 'ts' }, { value: 'caller', label: 'caller' }, { value: 'msg', label: 'msg' }, { value: 'question', label: 'question' }, { value: 'count', label: 'count' }];
    defaultFiles: DataTypes.File = {
        name: 'default',
        id: 0,
        data: [
            { "level": "info", "ts": 1547306559.829222, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:62", "msg": "Fetch questions success", "count": 165 },
            { "level": "info", "ts": 1547306565.250088, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d504d251974fc4534805", "index": 2, "trainingPhrase": "กองถ่ายขอเข้าถ่ายทำโมษณา กรรมการอนุมัติได้หรือไม่", "matched": false, "intent": "5c24d507d251974fc4534806", "retry": 0 } },
        ],
    };

    onFileReceive(file: DataTypes.File) {
        const currentID = this.state.currentID + 1
        const files = this.state.files.concat({ ...file, id: currentID })
        const newFileKeys = file.data.map(f => Object.keys(f)).reduce((x, y) => x.concat(y));
        const newFileCols: DataTypes.SelectOption[] = newFileKeys.map(k => ({ label: k, value: k }));
        const colsAvaliable = this.state.colsAvaliable.concat(newFileCols.filter(c => this.state.colsAvaliable.findIndex(o => c.value === o.value) < 0))
        this.setState({ files, currentID, colsAvaliable });
    }

    onRemoveFile(id: number) {
        this.setState({ files: this.state.files.filter(x => id !== x.id) })
    }

    onClearAll(e: React.FormEvent<HTMLButtonElement>) {
        this.setState({ files: [], currentID: -1 });
    }

    onSelectColsChange(value: ValueType<DataTypes.SelectOption>) {
        debugger
        this.setState({ colsSelected: value as DataTypes.SelectOption[] });
    }

    render() {
        return (
            <Container>
                <Header>
                    <FileUploader onAddFile={this.onFileReceive.bind(this)} />
                    <Select options={this.state.colsAvaliable} value={this.state.colsSelected} onChange={this.onSelectColsChange.bind(this)} isSearchable={true} isMulti={true} />
                    <FileList files={this.state.files} onRemoveFile={this.onRemoveFile.bind(this)} />
                    <button onClick={this.onClearAll.bind(this)} children="Clear" />
                </Header>
                <TableContainer>
                    <Table data={this.state.files} displayColumn={this.state.colsSelected.map(x => x.value)} />
                </TableContainer>
            </Container>
        );
    }
}
export default App;
