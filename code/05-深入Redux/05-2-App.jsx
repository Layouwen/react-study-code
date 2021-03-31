import React, { Component } from "react"

class App extends Component {
  add1() {
    this.props.onAdd1()
  }

  add2() {
    this.props.onAdd2()
  }

  addIf() {
    this.props.onAddIf()
  }

  addAsync() {
    this.props.onAddAsync()
  }

  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.value}</span> 次
        <div>
          <button id="add1" onClick={() => this.add1()}>+1</button>
          <button id="minus1" onClick={() => this.add2()}>+2</button>
          <button id="add1IfOdd" onClick={() => this.addIf()}>如果是单数就加1</button>
          <button id="add1After2Sec" onClick={() => this.addAsync()}>两秒后加1</button>
        </div>
      </div>
    )
  }
}

export default App
