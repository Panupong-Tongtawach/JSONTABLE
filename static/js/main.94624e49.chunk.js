(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(33)},23:function(e,n,t){},25:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(4),i=t.n(c),l=(t(23),t(5)),o=t(6),u=t(8),s=t(7),d=t(9),h=(t(25),t(2)),f=t(3);function p(){var e=Object(h.a)(["\nwidth: 100%;\nth {\n    padding: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n}\ntd {\n    vertical-align: top;\n}\n"]);return p=function(){return e},e}function b(){var e=Object(h.a)(["\ncolor: #b1b1b1;\nfont-size: 15px;\ntd {\n    padding: 10px;\n    vertical-align: top;\n}\ntr:nth-child(odd){\n    background-color: #252525;\n}\ntr:nth-child(even){\n    background-color: #202020;\n}\n"]);return b=function(){return e},e}function m(){var e=Object(h.a)(["\nth {\n    background-color: #101010;\n    text-transform: uppercase;\n    color: #00ad5f;\n    font-size: 15px;\n    font-weight: 500;\n    padding: 20px 10px;\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    z-index: 999;\n}\n"]);return m=function(){return e},e}function v(){var e=Object(h.a)(["\nborder-collapse: collapse;\ntext-align: left;\n"]);return v=function(){return e},e}var g=f.a.table(v()),j=f.a.thead(m()),y=f.a.tbody(b()),w=f.a.table(p()),O=t(1),k=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).reader=void 0,t.reader=new FileReader,t.reader.onloadend=t.handleFileRead.bind(Object(O.a)(Object(O.a)(t))),t}return Object(d.a)(n,e),Object(o.a)(n,[{key:"handleFileRead",value:function(e){var n=this.reader.result.trim().split("\n");console.log(n),this.props.onReceiveData(n.map(function(e){return JSON.parse(e)}))}},{key:"receiveFile",value:function(e){var n=e.currentTarget.files&&e.currentTarget.files[0];this.reader.readAsText(n)}},{key:"render",value:function(){return a.createElement("input",{type:"file",onChange:this.receiveFile.bind(this)})}}]),n}(a.Component),E=function(e){function n(e,t){var a;return Object(l.a)(this,n),(a=Object(u.a)(this,Object(s.a)(n).call(this,e))).defaultDatas=[{level:"info",ts:1547306559.829222,caller:"AnalyseTrainingPharse/analyse_training_pharse.go:62",msg:"Fetch questions success",count:165},{level:"info",ts:1547306565.250088,caller:"AnalyseTrainingPharse/analyse_training_pharse.go:74",msg:"Match",question:{qid:"5c24d504d251974fc4534805",index:2,trainingPhrase:"\u0e01\u0e2d\u0e07\u0e16\u0e48\u0e32\u0e22\u0e02\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e16\u0e48\u0e32\u0e22\u0e17\u0e33\u0e42\u0e21\u0e29\u0e13\u0e32 \u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",matched:!1,intent:"5c24d507d251974fc4534806",retry:0}}],a.colHeader=["level","ts","caller","msg","question","count"],a.state={data:a.defaultDatas},a}return Object(d.a)(n,e),Object(o.a)(n,[{key:"renderHeader",value:function(){return r.a.createElement("tr",null,this.colHeader.map(function(e){return r.a.createElement("th",{children:e})}))}},{key:"renderRows",value:function(){var e=this;return this.state.data.map(function(n){return r.a.createElement("tr",null,e.colHeader.map(function(t){switch(typeof n[t]){case"object":return r.a.createElement("tr",null,e.renderObjectTable(n[t]));default:return r.a.createElement("td",null,n[t])}}))})}},{key:"renderObjectTable",value:function(e){var n=this;return r.a.createElement(w,null,Object.keys(e).map(function(t){switch(typeof e[t]){case"object":return r.a.createElement("tr",null,n.renderObjectTable(e[t]));default:return r.a.createElement("tr",null,r.a.createElement("th",null,t),r.a.createElement("td",null,e[t]))}}))}},{key:"onDataReceive",value:function(e){this.setState({data:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,{onReceiveData:this.onDataReceive.bind(this)}),r.a.createElement(g,null,r.a.createElement(j,null,this.renderHeader()),r.a.createElement(y,null,this.renderRows())))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.94624e49.chunk.js.map