import React, { Component, ReactElement } from 'react';
import './App.css';
import { DataTypes } from './dataTypes';
import { Table, TableHead, TableBody, DetailTable } from './StyledComponent';
import { FileUploader } from './FlieUploader';

interface Props {

}

interface States {
  data: DataTypes.Data[];
}

class App extends Component<Props, States> {

  constructor(props: Props, state: States) {
    super(props);
    this.state = {
      data: this.defaultDatas
    }
  }

  defaultDatas: DataTypes.Data[] = [
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
  ];

  colHeader = ['level', 'ts', 'caller', 'msg', 'question', 'count']

  renderHeader() {
    return (
      <tr>
        {this.colHeader.map((header) => (<th children={header} />))}
      </tr>
    );
  }

  renderRows() {
    return this.state.data.map((rowData: any) => {
      return (
        <tr>
          {
            this.colHeader.map((key) => {
              switch (typeof (rowData[key])) {
                case 'object':
                  return <tr>{this.renderObjectTable(rowData[key])}</tr>;
                default:
                  return <td>{rowData[key]}</td>
              }
            })
          }
        </tr>
      )
    })
  }

  renderObjectTable(object: any): any {
    return (
      <DetailTable>
        {
          Object.keys(object).map((key: any) => {
            switch (typeof object[key]) {
              case 'object':
                return <tr>{this.renderObjectTable(object[key])}</tr>
              default:
                return (
                  <tr>
                    <th>{key}</th>
                    <td>{object[key]}</td>
                  </tr>
                );
            }
          })
        }
      </DetailTable>
    )
  }

  onDataReceive(data: DataTypes.Data[]) {
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <FileUploader onReceiveData={this.onDataReceive.bind(this)} />
        <Table>
          <TableHead>
            {this.renderHeader()}
          </TableHead>
          <TableBody>
            {this.renderRows()}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
