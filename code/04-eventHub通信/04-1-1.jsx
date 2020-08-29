// 财产
let money = {
  amount: 100000
}

// 事件中心
let fnLists = {}
let eventHub = {
  trigger(eventName, data) {
    let fnList = fnLists[eventName]
    if (!fnList) return
    for (let i = 0; i < fnList.length; i++) {
      fnList[i](data)
    }
  },
  on(eventName, fn) {
    if (!fnLists[eventName]) {
      fnLists[eventName] = []
    }
    fnLists[eventName].push(fn)
  }
}

// 管家
let x = {
  init() {
    eventHub.on("我想花钱", function (data) {
      money.amount -= data
      render()
    })
  }
}

x.init()

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }

  render() {
    return (
      <div className="home">
        <Father1 money={this.state.money}/>
        <Father2 money={this.state.money}/>
      </div>
    )
  }
}

class Father1 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="father">
        Father1 {this.props.money.amount}
        <Son11 money={this.props.money}/>
        <Son12 money={this.props.money}/>
      </div>
    )
  }
}

class Son11 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="son">
        son11 {this.props.money.amount}
      </div>
    )
  }
}

class Son12 extends React.Component {
  constructor() {
    super()
  }

  x() {
    eventHub.trigger("我想花钱", 100)
  }

  render() {
    return (
      <div className="son">
        son12 {this.props.money.amount}
        <button onClick={() => this.x()}>花钱</button>
      </div>
    )
  }
}

class Father2 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="father">
        Father2 {this.props.money.amount}
        <Son21 money={this.props.money}/>
        <Son22 money={this.props.money}/>
      </div>
    )
  }
}

class Son21 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="son">
        son21 {this.props.money.amount}
      </div>
    )
  }
}

class Son22 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="son">
        son22 {this.props.money.amount}
      </div>
    )
  }
}

render()

function render() {
  ReactDOM.render(<App/>, document.querySelector("#root"))
}