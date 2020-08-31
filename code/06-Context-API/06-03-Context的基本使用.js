import React from "react";
import "./styles.css";

// 创建
const xContext = React.createContext(10);

function F1() {
  return (
    <div className="fn">
      hello,i am F1.
      <F2 />
    </div>
  );
}

function F2() {
  return (
    <div className="fn">
      hello,i am F2.
      <F3 />
    </div>
  );
}

function F3(props) {
  return (
    <div className="fn">
      hello,i am F3
      {/* 在需要传参时,调用函数向下传递参数 */}
      <xContext.Consumer>{(value) => <F4 n={value} />}</xContext.Consumer>
    </div>
  );
}

function F4(props) {
  // 接收参数
  return <div className="fn">hello,i am F4,my value is {props.n}</div>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 100
    };
  }
  render() {
    return (
      <div className="fn">
        {/* 向下传递参数 */}
        <xContext.Provider value={this.state.number}>
          <F1 />
        </xContext.Provider>
      </div>
    );
  }
}

export default App;
