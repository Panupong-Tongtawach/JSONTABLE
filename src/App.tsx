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
z-index: 3;
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
        // Add demo file
        this.onFileReceive(this.defaultFiles);
    }

    defaultFiles: DataTypes.File = {
        name: 'default',
        id: 0,
        data: [
            { "level": "info", "ts": 1547306559.829222, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:62", "msg": "Fetch questions success", "count": 165, "test": null, "test2": [1, 2, 3, 999], "test3": undefined },
            { "level": "info", "ts": 1547306565.250088, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d504d251974fc4534805", "index": 2, "trainingPhrase": "กองถ่ายขอเข้าถ่ายทำโมษณา กรรมการอนุมัติได้หรือไม่", "matched": false, "intent": "5c24d507d251974fc4534806", "retry": 0 } },
        ],
    };

    avaliableCols(files: DataTypes.File[]) {
        const data = files.map(f => f.data).reduce((x, d) => x.concat(d), []);
        const colSet = new Set<string>(data.map(d => Object.keys(d)).reduce((x, y) => x.concat(y), []));
        const cols: DataTypes.SelectOption[] = [];
        colSet.forEach(c => cols.push({ label: c, value: c }));
        return cols;
    }

    onFileReceive(file: DataTypes.File) {
        const currentID = this.state.currentID + 1;
        const files = this.state.files.concat({ ...file, id: currentID });
        this.setState({ files, currentID, colsAvaliable: this.avaliableCols([...this.state.files, file]) });
    }

    onFileRemove(id: number) {
        const newFiles = this.state.files.filter(x => id !== x.id);
        const newAvaCols = this.avaliableCols(newFiles);
        const newSelCols = this.state.colsSelected.filter(x => newAvaCols.findIndex(y => y.value === x.value) > 0);
        this.setState({ files: newFiles, colsAvaliable: newAvaCols, colsSelected: newSelCols });
    }

    onClearAll(e: React.FormEvent<HTMLButtonElement>) {
        this.setState({ files: [], currentID: -1, colsAvaliable: [], colsSelected: [] });
    }

    onSelectColsChange(value: ValueType<DataTypes.SelectOption>) {
        this.setState({ colsSelected: value as DataTypes.SelectOption[] });
    }

    render() {
        return (
            <Container>
                <Header>
                    <h1>Please Select file</h1>
                    <FileUploader onAddFile={this.onFileReceive.bind(this)} />
                    <Select options={this.state.colsAvaliable} value={this.state.colsSelected} onChange={this.onSelectColsChange.bind(this)} isSearchable={true} isMulti={true} />
                    <FileList files={this.state.files} onFileRemove={this.onFileRemove.bind(this)} />
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
