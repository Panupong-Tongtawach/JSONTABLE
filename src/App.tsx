import React, { Component, ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const input: any = [
      { "level": "info", "ts": 1547306559.829222, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:62", "msg": "Fetch questions success", "count": 165 },
      { "level": "info", "ts": 1547306565.250088, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d504d251974fc4534805", "index": 2, "trainingPhrase": "กองถ่ายขอเข้าถ่ายทำโมษณา กรรมการอนุมัติได้หรือไม่", "matched": false, "intent": "5c24d507d251974fc4534806", "retry": 0 } },
      { "level": "info", "ts": 1547306565.558134, "caller": "AnalyseTrainingPharse/analyse_training_pharse.go:74", "msg": "Match", "question": { "qid": "5c24d504d251974fc4534805", "index": 3, "trainingPhrase": "โครงการขอมาจัดงานอีเว้นบริเวณล้อบบี้ กรรมการอนุมัติได้หรือไม่", "matched": false, "intent": "5c24d507d251974fc4534806", "retry": 0 } },
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
    ]
    const colHeader = ['level', 'ts', 'caller', 'msg', 'count'];

    const header = () => {
      return (
        <tr>
          {colHeader.map((header) => (<td children={header} />))}
        </tr>
      );
    }
    const row = () => {
      return input.map((data: any) => {
        return (
          <tr>
            {colHeader.map(key => {
              // console.log(data[key])
              return <td>{data[key]}</td>
            })}
          </tr>
        );
      });
    }

    return (
      <div className="App">
        <table>

          {header()}
          {row()}
        </table>
      </div>
    );
  }
}

export default App;
