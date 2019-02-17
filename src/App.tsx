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
    *:focus {
        outline: none;
    }
    width: 100%;
`;

const Header = styled.header`
    z-index: 3;
    margin: 15px 30px;

    .title {
        font-size: 24px;
        padding: 10px 0;
        font-weight: 600;
    }

    .file {
        margin-bottom: 15px;
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

    .colselect{
        display: flex;
        align-items: center;
        &-select{
            flex: 1 100%;
            color: black;
        }
        &-title{
            text-transform: capitalize;
            font-weight: 500;
            white-space: nowrap;
            font-size: 18px;
            padding-right: 15px;
            flex: 1 auto;
        }
    }
`;

interface Props { }

interface State {
    currentID: number;
    files: DataTypes.File[];
    colsAvaliable: DataTypes.SelectOption[];
    colsSelected: DataTypes.SelectOption[];
}

class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            currentID: 0,
            files: [],
            colsAvaliable: [],
            colsSelected: [],
        };
    }

    public componentDidMount() {
        // Add demo file
        this.onFileReceive(this.defaultFiles);
    }

    defaultFiles: DataTypes.File = {
        name: 'default.json',
        id: 0,
        data: [
            { "level": "info", "ts": 1547306559.829222, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:62", "msg": "Fetch questions success", "count": 165, "test": null, "test2": [1, 2, 3, 999], "test3": undefined },
            { "level": "info", "ts": 1547306559.829222, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:62", "msg": "Fetch questions success", "count": 165 },
            { "level": "info", "ts": 1547306565.250088, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d504d251974fc4534805", "index": 2, "trainingPhrase": "กองถ่ายขอเข้าถ่ายทำโมษณา กรรมการอนุมัติได้หรือไม่", "matched": false, "intent": "5c24d507d251974fc4534806", "retry": 0 } },
            { "level": "info", "ts": 1547306565.558134, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d504d251974fc4534805", "index": 5, "trainingPhrase": "โครงการขอมาจัดงานอีเว้นบริเวณล้อบบี้ กรรมการอนุมัติได้หรือไม่", "matched": false, "intent": "5c24d507d251974fc4534806", "retry": 0 } },
            { "level": "info", "ts": 1547306667.3124192, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5b2d251974fc4534853", "index": 0, "trainingPhrase": "หากนิติต้องทำจ่ายบุคคล หรือ Supplier ต้องเพิ่มข้อมูลทางใด", "matched": false, "intent": "5c24d5f9d251974fc453487a", "retry": 0 } },
            { "level": "info", "ts": 1547306688.600563, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5bed251974fc453485a", "index": 1, "trainingPhrase": "ถ้ามีลูกบ้านจ่ายเงินล่วงหน้าต้องทำยังไง", "matched": false, "intent": "5c316ec234d1f90001aa26f1", "retry": 0 } },
            { "level": "info", "ts": 1547306693.865719, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5c1d251974fc453485c", "index": 5, "trainingPhrase": "สร้างระบบใหม่ต้องใช้ระยะเวลาเท่าไหร่", "matched": false, "intent": "5c316bf934d1f90001aa26e3", "retry": 0 } },
            { "level": "info", "ts": 1547306700.147403, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5c7d251974fc453485f", "index": 6, "trainingPhrase": "เบี้ยปรับล่าช้า สามารถลดหนี้ได้หรือไม่", "matched": false, "intent": "5c27012b34d1f9000132252a", "retry": 0 } },
            { "level": "info", "ts": 1547306728.5789208, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5d7d251974fc4534868", "index": 2, "trainingPhrase": "อัตราค่าเบี้ยประกันภัยที่ลูกบ้านต้องจ่ายคิดตามพื้นที่ห้อง หรือคิดจากอัตราส่วนกรรมสิทธิ์", "matched": false, "intent": "5c24d5d9d251974fc4534869", "retry": 0 } },
            { "level": "info", "ts": 1547306771.894461, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5ead251974fc4534873", "index": 3, "trainingPhrase": "กรณีเรียกเก็บค่าที่จอดรถ แล้วลูกบ้านปฏิเสธการจ่าย สามารถดำเนินการ อย่างไรได้บ้าง", "matched": false, "intent": "5c27023434d1f9000132252e", "retry": 0 } },
            { "level": "info", "ts": 1547306774.6599958, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 0, "trainingPhrase": "ขอเลขที่ใบเสร็จใหม่", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
            { "level": "info", "ts": 1547306774.967864, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 1, "trainingPhrase": "ขอเลขที่ใบเสร็จอีกครั้ง", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
            { "level": "info", "ts": 1547306775.27901, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 2, "trainingPhrase": "ขอเลขใบเสร็จใหม่", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
            { "level": "info", "ts": 1547306775.581335, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 3, "trainingPhrase": "ขอเลขใบเสร็จอีกครั้ง", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
            { "level": "info", "ts": 1547306775.888649, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 4, "trainingPhrase": "อยากได้เลขใบเสร็จใหม่", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
            { "level": "info", "ts": 1547306776.1961741, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 5, "trainingPhrase": "เอาเลขใบเสร็จอีกรอบ", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
            { "level": "info", "ts": 1547306776.4603899, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 6, "trainingPhrase": "ขอเลขใบเสร็จอีกรอบ", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 1 } },
            { "level": "info", "ts": 1547306776.708064, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 7, "trainingPhrase": "วิธี running ใบเสร็จใหม่", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
            { "level": "info", "ts": 1547306777.023008, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d5f0d251974fc4534876", "index": 8, "trainingPhrase": "รันเลขที่ใบเสร็จเลขใหม่ให้หน่อยค่ะ เนื่องจากใบเสร็จรับเงินล็อตเก่าหมด", "matched": false, "intent": "5c316af134d1f90001aa26df", "retry": 0 } },
        ],
    };

    private avaliableCols = (files: DataTypes.File[]) => {
        const data = ([] as object[]).concat(...files.map(f => f.data));
        const colSet = new Set<string>(data.map(d => Object.keys(d)).reduce((x, y) => x.concat(y), []));
        const cols: DataTypes.SelectOption[] = [];
        colSet.forEach(c => cols.push({ label: c, value: c }));
        return cols;
    }

    private onFileReceive = (file: DataTypes.File) => {
        const currentID = this.state.currentID + 1;
        const files = this.state.files.concat({ ...file, id: currentID });
        this.setState({ files, currentID, colsAvaliable: this.avaliableCols([...this.state.files, file]) });
    }

    private onFileRemove = (id: number) => {
        const newFiles = this.state.files.filter(x => id !== x.id);
        const newAvaCols = this.avaliableCols(newFiles);
        const newSelCols = this.state.colsSelected.filter(x => newAvaCols.findIndex(y => y.value === x.value) > 0);
        this.setState({ files: newFiles, colsAvaliable: newAvaCols, colsSelected: newSelCols });
    }

    private onClearAll = (e: React.FormEvent<HTMLButtonElement>) => {
        this.setState({ files: [], currentID: -1, colsAvaliable: [], colsSelected: [] });
    }

    private onSelectColsChange = (value: ValueType<DataTypes.SelectOption>) => {
        this.setState({ colsSelected: value as DataTypes.SelectOption[] });
    }

    public render() {
        return (
            <Container>
                <Header>
                    <div className="file">
                        <div className="file-title">File Lists</div>
                        <div className="file-grid">
                            <div className="file-upload">
                                <FileUploader onAddFile={this.onFileReceive} />
                            </div>
                            <div className="file-list">
                                <FileList files={this.state.files} onFileRemove={this.onFileRemove} />
                            </div>
                            <button className="file-clear" onClick={this.onClearAll} children="Clear" />
                        </div>
                    </div>
                    <div className="colselect">
                        <div className="colselect-title">Col Lists</div>
                        <div className="colselect-select">
                            <Select options={this.state.colsAvaliable} value={this.state.colsSelected} onChange={this.onSelectColsChange} isSearchable={true} isMulti={true} />
                        </div>
                    </div>
                </Header>
                <TableContainer>
                    <Table data={this.state.files} displayColumn={this.state.colsSelected.map(x => x.value)} />
                </TableContainer>
            </Container>
        );
    }
}
export default App;
