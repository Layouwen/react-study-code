// 财产
let money = {
  amount: 100000
}

/**
 * 保存事件
 * {
 *   payMoney: [
 *     ()=>console.log("花钱")
 *   ],
 *   getMoney: [
 *     ()=>console.log("爸爸拿钱"),
 *     ()=>console.log("儿子拿钱")
 *   ]
 * }
 */
let fnLists = {}

// 事件中心
let eventHub = {
  // 添加事件
  on(eventName, fn) {
    // 如果之前没添加，则新建一个事件数组
    if (!fnLists[eventName]) {
      fnLists[eventName] = []
    }
    // 往事件数组添加事件
    fnLists[eventName].push(fn)
  },
  // 触发事件
  trigger(eventName, data) {
    // 获取我们对应事件名的事件数组
    let fnList = fnLists[eventName]
    if (!fnList) return
    // 遍历该数组的所有事件
    for (let i = 0; i < fnList.length; i++) {
      fnList[i](data)
    }
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
        <Father1 money={this.state.money} />
        <Father2 money={this.state.money} />
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
        <Son11 money={this.props.money} />
        <Son12 money={this.props.money} />
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
        <Son21 money={this.props.money} />
        <Son22 money={this.props.money} />
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
  ReactDOM.render(<App />, document.querySelector("#root"))
}